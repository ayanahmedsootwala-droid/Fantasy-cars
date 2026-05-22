# Fantasy Cars

Fantasy Cars is a Vite + React + TypeScript automotive marketplace app with Supabase-backed data, auth, and edge functions.

## Local setup

1. Install dependencies:
   `npm install`
2. Create a root `.env` file from `.env.example`.
3. Start the dev server:
   `npm run dev`

## Required environment variables

The frontend expects these build-time variables:

```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## Cloudflare Pages deployment

1. Connect this repository in Cloudflare Pages.
2. Use the default build command:
   `npm run build`
3. Use the output directory:
   `dist`
4. Add these environment variables in Cloudflare Pages:
   `VITE_SUPABASE_URL`
   `VITE_SUPABASE_ANON_KEY`

## Notes

- Do not commit real `.env` files.
- Supabase SQL migrations and edge functions live in [supabase](./supabase).
