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

<<<<<<< HEAD
## 📬 Contact
- Email: hs8926422@gmail.com
- LinkedIn: linkedin.com/in/harsh-sharma-075176362
- GitHub: github.com/HarshSharma1137
=======
You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


live URL https://college-discovery-two.vercel.app
>>>>>>> 04eb4c5499ac56a9349fcffac0f4d960ac270b55
