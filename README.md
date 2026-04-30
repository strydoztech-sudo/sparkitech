# 🌐 Spark Info Tech Solutions — Next.js Website

**Domain:** sparkitech.space | **Backend:** billing.sparkitech.space (Laravel on cPanel)

---

## 📁 Pages Included

| Page | URL |
|------|-----|
| Home | `/` |
| About Us | `/about` |
| All Services | `/services` |
| CCTV Installation | `/services/cctv-installation` |
| Security Camera | `/services/security-camera` |
| Security Gate | `/services/security-gate` |
| Security Door | `/services/security-door` |
| Intercom Solutions | `/services/intercom-solutions` |
| Web Development | `/services/web-development` |
| Software Installation | `/services/software-installation` |
| Billing Software | `/services/billing-software` |
| Mobile App | `/services/mobile-app` |
| Get Estimate | `/estimate` |
| Contact | `/contact` |

---

## 🚀 Setup & Deploy to Vercel

### Step 1 — Install dependencies
```bash
npm install
```

### Step 2 — Set environment variable
Edit `.env.local`:
```
NEXT_PUBLIC_API_URL=https://billing.sparkitech.space/api
NEXT_PUBLIC_SITE_URL=https://sparkitech.space
```

### Step 3 — Run locally
```bash
npm run dev
```
Open: http://localhost:3000

### Step 4 — Deploy to Vercel
1. Push to GitHub
2. Go to vercel.com → New Project → Import GitHub repo
3. Add environment variable: `NEXT_PUBLIC_API_URL=https://billing.sparkitech.space/api`
4. Click Deploy!

---

## 🔗 Laravel API Connection

The website connects to your Laravel billing system at `billing.sparkitech.space`:

| API Endpoint | Used For |
|---|---|
| `GET /api/settings` | Company logo, name, contact info |
| `GET /api/products` | Products with images |
| `GET /api/services` | Services list |
| `POST /api/inquiry` | Contact form submission |

---

## 🌍 Language Support
- **English** — all pages
- **Tamil (தமிழ்)** — headings, taglines and key sections

---

## 📞 Contact Details (update in `lib/api.ts`)
- Phone: +91 12345 67880
- Email: info@sparkitech.space
- WhatsApp: 911234567880
- Location: Coimbatore, Tamil Nadu
