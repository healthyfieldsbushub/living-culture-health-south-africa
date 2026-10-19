# Living Culture Health South Africa

An independent full-stack South African wellness, live-culture and natural-products storefront. The React frontend uses a same-origin Node API and an independent PostgreSQL database.

## Local development

```bash
npm ci
npm run dev
```

Set `DATABASE_URL` for persistent data. The production database automatically receives the included public catalogue seed on first startup. Do not copy payment, courier, social, analytics, or administrator credentials from another site; configure fresh values in the target host.

## Production

The included Dockerfile runs the frontend build and server. Render injects `DATABASE_URL` for the independent PostgreSQL database.
