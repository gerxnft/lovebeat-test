# LoveBeat: Nexus

A standalone Next.js landing page for LoveBeat: Nexus. It has no ChatGPT authentication or platform-specific hosting dependency.

## Local development

```bash
pnpm install
pnpm dev
```

Open `http://localhost:3000`.

## Production

```bash
pnpm install --frozen-lockfile
pnpm build
pnpm start
```

The server uses port `3000` by default. Set `PORT` to change it.
Set `NEXT_PUBLIC_SITE_URL` to your final `https://` domain so social-preview links use the correct address.

## Deploy on your own server

Install Node.js 22+, upload this project, and run the production commands above behind your preferred reverse proxy. The build also produces Next.js standalone output in `.next/standalone` for container-based deployment.

The download calls-to-action currently open a “Coming Soon” message and do not initiate a download.
