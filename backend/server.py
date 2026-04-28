from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import asyncio
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict, EmailStr
from typing import List, Optional
import uuid
from datetime import datetime, timezone
from urllib.parse import quote as urlquote
import resend


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Resend config
RESEND_API_KEY = os.environ.get('RESEND_API_KEY', '')
SENDER_EMAIL = os.environ.get('SENDER_EMAIL', 'onboarding@resend.dev')
TO_EMAILS = ['contact@leelavigils.com', 'leelavigils@gmail.com']
WHATSAPP_NUMBER = '916362554499'

if RESEND_API_KEY:
    resend.api_key = RESEND_API_KEY

# Create the main app without a prefix
app = FastAPI(title="Leela Vigil Solutions API")

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# Define Models
class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")

    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


class StatusCheckCreate(BaseModel):
    client_name: str


class QuoteRequest(BaseModel):
    name: str = Field(..., min_length=2, max_length=100)
    email: EmailStr
    mobile: str = Field(..., min_length=6, max_length=20)
    service: Optional[str] = Field(default=None, max_length=120)
    message: str = Field(..., min_length=5, max_length=4000)


class QuoteRecord(BaseModel):
    id: str
    name: str
    email: EmailStr
    mobile: str
    service: Optional[str] = None
    message: str
    email_sent: bool
    created_at: datetime


def _build_email_html(q: QuoteRequest) -> str:
    safe = lambda s: (s or '').replace('<', '&lt;').replace('>', '&gt;')
    service_row = f"<tr><td style='padding:8px 12px;color:#94a3b8;'>Service</td><td style='padding:8px 12px;color:#fff;'>{safe(q.service)}</td></tr>" if q.service else ''
    return f"""
<!doctype html>
<html><body style="margin:0;background:#05080f;font-family:Arial,Helvetica,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#05080f;padding:32px 0;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#0f1b2e;border:1px solid rgba(0,255,156,0.25);border-radius:14px;overflow:hidden;">
        <tr><td style="padding:24px 28px;background:linear-gradient(90deg,#00ff9c,#00cfff);">
          <div style="font-size:11px;letter-spacing:2px;color:#05080f;font-weight:700;">LEELA VIGIL SOLUTIONS</div>
          <div style="font-size:22px;color:#05080f;font-weight:800;margin-top:4px;">New Quote Request</div>
        </td></tr>
        <tr><td style="padding:24px 28px;color:#fff;">
          <p style="margin:0 0 16px;color:#94a3b8;font-size:13px;">A new enquiry was submitted via the website.</p>
          <table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid rgba(255,255,255,0.08);border-radius:10px;overflow:hidden;font-size:14px;">
            <tr><td style="padding:8px 12px;color:#94a3b8;width:30%;">Name</td><td style="padding:8px 12px;color:#fff;">{safe(q.name)}</td></tr>
            <tr><td style="padding:8px 12px;color:#94a3b8;background:rgba(255,255,255,0.03);">Email</td><td style="padding:8px 12px;color:#fff;background:rgba(255,255,255,0.03);">{safe(q.email)}</td></tr>
            <tr><td style="padding:8px 12px;color:#94a3b8;">Mobile</td><td style="padding:8px 12px;color:#fff;">{safe(q.mobile)}</td></tr>
            {service_row}
            <tr><td style="padding:8px 12px;color:#94a3b8;background:rgba(255,255,255,0.03);vertical-align:top;">Message</td><td style="padding:8px 12px;color:#fff;background:rgba(255,255,255,0.03);white-space:pre-wrap;">{safe(q.message)}</td></tr>
          </table>
          <p style="margin:20px 0 0;color:#64748b;font-size:12px;">Sent automatically from leelavigils.com</p>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body></html>
"""


async def _send_email_async(q: QuoteRequest) -> bool:
    if not RESEND_API_KEY:
        logging.warning("RESEND_API_KEY not configured — skipping email send")
        return False
    params = {
        "from": f"Leela Vigil Solutions <{SENDER_EMAIL}>",
        "to": TO_EMAILS,
        "reply_to": q.email,
        "subject": f"New Quote Request from {q.name}",
        "html": _build_email_html(q),
    }
    try:
        await asyncio.to_thread(resend.Emails.send, params)
        return True
    except Exception as e:
        logging.error(f"Resend send failed: {e}")
        return False


def _whatsapp_link(q: QuoteRequest) -> str:
    msg = (
        f"Hello Leela Vigil Solutions,\n\n"
        f"Name: {q.name}\n"
        f"Email: {q.email}\n"
        f"Mobile: {q.mobile}\n"
        + (f"Service: {q.service}\n" if q.service else "")
        + f"\nMessage:\n{q.message}"
    )
    return f"https://wa.me/{WHATSAPP_NUMBER}?text={urlquote(msg)}"


# Routes
@api_router.get("/")
async def root():
    return {"message": "Leela Vigil Solutions API"}


@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_obj = StatusCheck(**input.model_dump())
    doc = status_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    await db.status_checks.insert_one(doc)
    return status_obj


@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    rows = await db.status_checks.find({}, {"_id": 0}).to_list(1000)
    for c in rows:
        if isinstance(c.get('timestamp'), str):
            c['timestamp'] = datetime.fromisoformat(c['timestamp'])
    return rows


@api_router.post("/quote")
async def submit_quote(payload: QuoteRequest):
    record_id = str(uuid.uuid4())
    created_at = datetime.now(timezone.utc)

    email_sent = await _send_email_async(payload)

    doc = {
        "id": record_id,
        "name": payload.name,
        "email": payload.email,
        "mobile": payload.mobile,
        "service": payload.service,
        "message": payload.message,
        "email_sent": email_sent,
        "created_at": created_at.isoformat(),
    }
    try:
        await db.quote_requests.insert_one(doc.copy())
    except Exception as e:
        logging.error(f"Mongo insert failed: {e}")
        raise HTTPException(status_code=500, detail="Could not save submission")

    return {
        "success": True,
        "id": record_id,
        "email_sent": email_sent,
        "whatsapp_url": _whatsapp_link(payload),
        "message": "Thanks! We will get back to you shortly.",
    }


@api_router.get("/quotes", response_model=List[QuoteRecord])
async def list_quotes(limit: int = 50):
    rows = await db.quote_requests.find({}, {"_id": 0}).sort("created_at", -1).to_list(limit)
    for r in rows:
        if isinstance(r.get('created_at'), str):
            r['created_at'] = datetime.fromisoformat(r['created_at'])
    return rows


# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
