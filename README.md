# InfraPulse

Professional frontend-only construction project-management SaaS prototype.

## Stack
React + Vite + Tailwind CSS + reusable shadcn-style UI primitives + Lucide React + Recharts + React Router.

## Run
```bash
npm install
npm run dev
```

Open http://localhost:5173/login

## Notes
- No backend or external APIs are used.
- Mock data lives in `src/data/mockData.js`.
- Local UI state powers project creation, filters, AI review actions, alert read state, uploads and forms.
- Photos use remote demo image URLs only for visual realism. Replace them with your storage/CDN later if required.
