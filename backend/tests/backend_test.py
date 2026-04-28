"""Backend tests for Leela Vigil Solutions API."""
import os
import pytest
import requests

BASE_URL = os.environ.get('REACT_APP_BACKEND_URL', 'https://leela-vigil.preview.emergentagent.com').rstrip('/')


@pytest.fixture(scope="module")
def api_client():
    s = requests.Session()
    s.headers.update({"Content-Type": "application/json"})
    return s


# Health
class TestHealth:
    def test_root(self, api_client):
        r = api_client.get(f"{BASE_URL}/api/")
        assert r.status_code == 200
        assert r.json().get("message") == "Leela Vigil Solutions API"


# Quote submission flow
class TestQuote:
    def test_submit_valid_quote(self, api_client):
        payload = {
            "name": "TEST_User",
            "email": "test_user@example.com",
            "mobile": "+919999999999",
            "service": "CCTV Surveillance",
            "message": "Need a quote for 4 cameras at our shop in Mysuru.",
        }
        r = api_client.post(f"{BASE_URL}/api/quote", json=payload)
        assert r.status_code == 200, r.text
        data = r.json()
        assert data["success"] is True
        assert isinstance(data["id"], str) and len(data["id"]) > 0
        # email_sent must be False because RESEND_API_KEY is empty
        assert data["email_sent"] is False
        assert "whatsapp_url" in data
        assert "916362554499" in data["whatsapp_url"]
        assert data["whatsapp_url"].startswith("https://wa.me/")
        # store id for persistence check
        pytest.created_quote_id = data["id"]

    def test_submit_quote_missing_required(self, api_client):
        # Missing message
        payload = {
            "name": "TEST_User2",
            "email": "test2@example.com",
            "mobile": "+919999999999",
        }
        r = api_client.post(f"{BASE_URL}/api/quote", json=payload)
        assert r.status_code == 422

    def test_submit_quote_invalid_email(self, api_client):
        payload = {
            "name": "TEST_User3",
            "email": "not-an-email",
            "mobile": "+919999999999",
            "message": "Hello there from test",
        }
        r = api_client.post(f"{BASE_URL}/api/quote", json=payload)
        assert r.status_code == 422

    def test_submit_quote_short_name(self, api_client):
        payload = {
            "name": "A",
            "email": "ok@example.com",
            "mobile": "+919999999999",
            "message": "Hello there from test",
        }
        r = api_client.post(f"{BASE_URL}/api/quote", json=payload)
        assert r.status_code == 422

    def test_quote_optional_service(self, api_client):
        payload = {
            "name": "TEST_NoService",
            "email": "ns@example.com",
            "mobile": "+919999999999",
            "message": "No service selected here, generic enquiry",
        }
        r = api_client.post(f"{BASE_URL}/api/quote", json=payload)
        assert r.status_code == 200
        assert r.json()["success"] is True


# Listing quotes
class TestListQuotes:
    def test_list_quotes_returns_list_no_objectid(self, api_client):
        r = api_client.get(f"{BASE_URL}/api/quotes")
        assert r.status_code == 200, r.text
        data = r.json()
        assert isinstance(data, list)
        assert len(data) > 0
        for item in data:
            assert "_id" not in item
            assert "id" in item
            assert "name" in item
            assert "email" in item
            assert "mobile" in item
            assert "message" in item
            assert "email_sent" in item
            assert "created_at" in item

    def test_persisted_quote_appears_in_list(self, api_client):
        created_id = getattr(pytest, "created_quote_id", None)
        assert created_id, "No created quote id from previous test"
        r = api_client.get(f"{BASE_URL}/api/quotes?limit=200")
        assert r.status_code == 200
        ids = [q["id"] for q in r.json()]
        assert created_id in ids
