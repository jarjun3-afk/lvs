// Static services data — slug-routed detail pages
// Images live in /public/images/ so they're bundled with the build
export const LOGO_URL = "/images/logo.jpeg";

export const HERO_BG = "/images/hero-bg.png";

export const SERVICES = [
  {
    slug: "cctv-surveillance",
    code: "01",
    title: "CCTV Surveillance",
    short: "HD+ 24/7 monitoring with night vision, remote viewing, and intelligent recording.",
    image: "/images/service-cctv.png",
    tagline: "See everything. Miss nothing.",
    overview:
      "End‑to‑end CCTV surveillance for homes, shops, banks, factories and warehouses. We engineer multi-camera setups with crystal-clear day & night vision, intelligent motion-triggered recording, and secure remote viewing on your phone.",
    features: [
      "2MP / 4MP / 5MP / 8MP IP & HD analog cameras (Hikvision, CP Plus, Dahua)",
      "Color night vision and IR cameras up to 50 m range",
      "NVR / DVR with 1–32 channels, motion-only recording",
      "Live remote viewing via mobile app on Android & iOS",
      "Cloud + local hard-disk redundant storage (1TB–10TB)",
      "PoE powered cameras — single cable for power + data",
      "AI features: line crossing, intrusion zones, face capture",
      "Tamper alerts and email/WhatsApp push notifications",
    ],
    useCases: [
      "Bank ATMs & branches",
      "Retail showrooms & jewellery stores",
      "Apartments, villas & gated communities",
      "Factories, godowns, petrol pumps",
      "Schools, clinics & offices",
    ],
  },
  {
    slug: "lan-networking",
    code: "02",
    title: "LAN Networking",
    short: "Structured cabling and high-speed wired networks built for uptime.",
    image: "/images/service-lan.png",
    tagline: "Wired for speed. Built to last.",
    overview:
      "Professional LAN design, structured cabling and rack assembly for offices, banks and industrial sites. We deliver clean cable runs, proper labelling and tested links so your network never becomes the bottleneck.",
    features: [
      "Cat6 / Cat6a / Cat7 structured cabling with certification",
      "24/48 port managed & unmanaged switches (Cisco, D-Link, TP-Link)",
      "Server rack assembly, patch panels & cable dressing",
      "Fiber optic backbone laying, splicing & termination",
      "VLAN segmentation, QoS and bandwidth management",
      "Wi‑Fi access point planning & heat-map based deployment",
      "Internet failover & dual-WAN router setup",
      "Annual maintenance contract (AMC) with on-site SLA",
    ],
    useCases: [
      "Bank branches & corporate offices",
      "Hotels & hospitals",
      "Schools & coaching institutes",
      "Manufacturing units",
    ],
  },
  {
    slug: "biometric-access",
    code: "03",
    title: "Biometric Access Control",
    short: "Fingerprint, face & RFID access systems with attendance & audit trails.",
    image: "/images/service-biometric.png",
    tagline: "Only the right people. Every time.",
    overview:
      "Stop key duplication and unauthorised entry. Our biometric access control systems combine fingerprint, face recognition and RFID cards with electromagnetic locks and exit buttons — backed by automatic attendance reports.",
    features: [
      "Fingerprint, face recognition & palm-vein readers",
      "RFID / Mifare card and PIN-code support",
      "Electromagnetic locks (180kg / 280kg) and strike locks",
      "Door sensors, exit push buttons and break-glass overrides",
      "Automatic attendance & payroll-ready reports",
      "Cloud + offline mode with battery backup",
      "Multi-door & multi-location centralised management",
      "Time-zone & access-level restrictions per user",
    ],
    useCases: [
      "Corporate offices & co-working",
      "Server rooms & data centres",
      "Hospitals, labs & pharma",
      "Educational institutes",
    ],
  },
  {
    slug: "fire-smoke-systems",
    code: "04",
    title: "Fire & Smoke Intrusion Systems",
    short: "Early-warning fire detection with addressable panels and instant alerts.",
    image: "/images/service-fire.png",
    tagline: "Detect it early. Act in seconds.",
    overview:
      "Conventional and addressable fire-alarm systems engineered to local fire-safety codes. Photoelectric smoke detectors, heat detectors and gas sensors raise the alert long before the fire spreads — with hooter, strobe and SMS notifications.",
    features: [
      "Conventional & addressable fire-alarm panels (2–32 zones)",
      "Photoelectric smoke detectors and heat (rate-of-rise) detectors",
      "Manual call points (MCP) and hooter‑cum‑strobe units",
      "LPG / natural-gas leak detectors with auto shut-off valve",
      "Integration with CCTV — auto record on alarm",
      "SMS / Email / WhatsApp alerts to multiple contacts",
      "Battery backup (24-hour standby) with charger",
      "Annual testing, certification & AMC support",
    ],
    useCases: [
      "Banks, ATMs & lockers",
      "Showrooms, malls & restaurants",
      "Warehouses & cold storage",
      "Schools & residential complexes",
    ],
  },
  {
    slug: "door-sensors",
    code: "05",
    title: "Door Sensors",
    short: "Magnetic & wireless door contacts that flag every unauthorised entry.",
    image: "/images/service-door.png",
    tagline: "Every door, every entry — logged.",
    overview:
      "Magnetic reed switches and wireless contact sensors that detect the moment a door, window or cupboard opens. Integrated with the alarm panel and your phone for instant push alerts and CCTV video pop-up.",
    features: [
      "Wired magnetic reed contacts for doors & windows",
      "Wireless 433 MHz battery sensors with 2-year battery life",
      "Tamper-proof housings with anti-removal alarms",
      "Day / night / armed-away modes with delay timers",
      "Push notifications and siren trigger on breach",
      "Integration with CCTV NVR — auto bookmark recordings",
      "Compatible with our biometric & alarm panels",
    ],
    useCases: [
      "Bank vaults, strong rooms & cash counters",
      "Server racks & medicine cabinets",
      "Home main door, balcony & windows",
      "Retail back-doors & store-rooms",
    ],
  },
  {
    slug: "shutter-sensors",
    code: "06",
    title: "Shutter Sensors",
    short: "Heavy-duty roller-shutter monitoring for shops, godowns and showrooms.",
    image: "/images/service-shutter.png",
    tagline: "If the shutter moves, you’ll know.",
    overview:
      "Industrial-grade roller-shutter sensors that detect even a few centimetres of movement when the shop is closed. Wired into the GSM alarm panel — gets you a call, SMS and WhatsApp the moment something is wrong.",
    features: [
      "Industrial reed-switch shutter sensors with steel armour",
      "Vibration / tilt sensors for forced-entry detection",
      "GSM auto-dialer panel with 6 emergency numbers",
      "Loud 110 dB external siren with strobe",
      "Backup battery (8–12 hour standby)",
      "Mobile app arming/disarming with PIN",
      "Optional CCTV camera trigger on shutter event",
    ],
    useCases: [
      "Retail shops & jewellery stores",
      "Godowns, warehouses & cold storage",
      "Showrooms with rolling shutters",
      "Petrol bunks & service stations",
    ],
  },
  {
    slug: "motion-sensors",
    code: "07",
    title: "Motion Sensors",
    short: "Smart PIR & dual-tech sensors that catch movement, ignore pets.",
    image: "/images/service-motion.png",
    tagline: "Detect intruders, not pets.",
    overview:
      "PIR (passive infrared) and dual-technology motion detectors that pick up human movement inside protected zones — wired into your alarm system, smart bulbs and CCTV. Pet-immune variants ignore animals up to 25 kg.",
    features: [
      "Indoor & outdoor PIR sensors with 12–18 m range",
      "Dual-tech (PIR + microwave) for false-alarm rejection",
      "Pet-immune mode (up to 25 kg)",
      "Wide-angle ceiling-mount 360° detectors",
      "Wireless models with battery + tamper alerts",
      "Auto trigger of CCTV recording, lights & siren",
      "Integration with smart-home & voice assistants",
    ],
    useCases: [
      "Bank ATMs after-hours zones",
      "Office cabins & store rooms",
      "Garages, garden perimeters & terraces",
      "Hotel corridors & schools",
    ],
  },
];

export const getServiceBySlug = (slug) => SERVICES.find((s) => s.slug === slug);
