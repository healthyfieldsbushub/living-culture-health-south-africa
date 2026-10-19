# Living Culture Health South Africa — Independent Copy Plan

## Scope
Create a fully separate copy of the supplied storefront and backend under the Living Culture Health South Africa brand. Preserve the public storefront routes, cart, content hub, checkout interfaces, order flows, admin interfaces and API behaviors while isolating hosting, database, source repository, public URL, credentials and customer data from the source site.

## Implementation
- The code, static assets and database schema are copied into a new GitHub repository.
- The server uses PostgreSQL on the new host and seeds only the source site’s public catalogue, category, blog and shipping-rate records on first startup.
- Customers, accounts, sessions, orders, payments, messages, coupons, private configurations and all credentials are deliberately excluded.
- Payment, courier, social and analytics connections remain unconfigured until fresh target credentials are supplied.
- The public site title, metadata, social image, PWA assets, favicon and application wordmarks use Living Culture Health South Africa / LCH.

## Structure
- `src/`: React storefront, public pages and admin UI.
- `server/`: Node API, authentication/session helpers, PostgreSQL record layer and public seed loader.
- `server/public-seed.json`: public-only initial catalogue and content records.
- `public/`: PWA, favicon, robots, sitemap and social-preview assets.
- `Dockerfile`: reproducible production build and web server.
