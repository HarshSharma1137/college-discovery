# 🎓 College Discovery Platform

A production-grade full-stack college discovery and comparison platform built with Next.js, PostgreSQL, and NextAuth.js. Inspired by Careers360 and CollegeDunia.

## 🌐 Live Demo
[college-discovery-two.vercel.app](https://college-discovery-two.vercel.app)

## 🛠 Tech Stack
- **Framework:** Next.js 16 + TypeScript
- **Styling:** Tailwind CSS
- **Database:** PostgreSQL (Neon Cloud)
- **ORM:** Prisma 5
- **Authentication:** NextAuth.js (JWT)
- **Deployment:** Vercel

## ✨ Features
- 🔍 College listing with search and filters
- 📄 College detail pages with courses and placement stats
- ⚖️ Side-by-side college comparison (up to 3 colleges)
- 🔐 User authentication (register/login)
- 💾 Save colleges to your account
- 📱 Fully responsive and mobile-first

## 📁 Project Structure
college-discovery/
├── app/
│   ├── api/colleges/     → REST API routes
│   ├── college/[id]/     → Detail page
│   ├── compare/          → Compare page
│   ├── login/            → Auth pages
│   ├── register/
│   └── page.tsx          → Home listing page
├── lib/
│   ├── prisma.ts         → DB client singleton
│   └── auth.ts           → NextAuth config
└── prisma/
    ├── schema.prisma     → DB schema
    └── seed.ts           → Mock data 15 colleges

## 🔌 API Endpoints
| Method | Endpoint | Purpose |
|--------|----------|---------|
| GET | `/api/colleges` | List + search + filter |
| GET | `/api/colleges/[id]` | Single college detail |
| GET | `/api/colleges/compare` | Compare multiple colleges |
| POST | `/api/auth/register` | Register new user |

## 🗄 Database Schema
- College — stores all college data
- User — stores authenticated users
- SavedCollege — links users to saved colleges

## 🚀 Run Locally
git clone https://github.com/HarshSharma1137/college-discovery.git
cd college-discovery
npm install

Add .env file:
DATABASE_URL="your-postgresql-url"
NEXTAUTH_SECRET="your-secret"
NEXTAUTH_URL="http://localhost:3000"

npx prisma generate
npx prisma db push
npm run seed
npm run dev

## ⚠️ Edge Cases Handled
- Empty search results → No colleges found state
- Loading states on all data fetches
- Invalid college ID → 404 response
- Duplicate user registration → error message
- Compare with less than 2 colleges → validation alert

## 📬 Contact
- Email: hs8926422@gmail.com
- LinkedIn: linkedin.com/in/harsh-sharma-075176362
- GitHub: github.com/HarshSharma1137