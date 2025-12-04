# Project Nexus – Workship Management API (Advanced Starter)

This is an **advanced starter template** for your Project Nexus backend:

- Node.js + TypeScript + Express
- PostgreSQL + Prisma
- JWT authentication with hashed passwords
- Modular architecture (controllers, services, routes)
- Ready for ERD, presentation, demo video, and deployment tasks

You can push this as your **GitHub repo**, then customize features, models, and docs.

## Quick Start

```bash
npm install

# Setup environment
cp .env.example .env
# Edit .env with your DATABASE_URL and JWT_SECRET

# Prisma
npx prisma migrate dev --name init
npx prisma generate

# Run dev server
npm run dev
```

Health check:

- `GET http://localhost:4000/health`

Main flows to extend:

- `POST /api/auth/register`
- `POST /api/auth/login`
- `GET /api/users/me` (protected)