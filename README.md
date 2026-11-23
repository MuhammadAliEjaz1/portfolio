# Ali Ejaz Portfolio

React + Vite + Tailwind CSS portfolio site.

## Run locally
    npm install
    npm run dev

## Contact form key (Web3Forms)
1. Get a free access key at web3forms.com (enter your email).
2. Locally: copy `.env.example` to `.env` and paste the key.
3. On Vercel: Project Settings > Environment Variables > add `VITE_WEB3FORMS_KEY`, then redeploy.

## Deploy
Push to GitHub, then import the repo in Vercel (framework: Vite, build: npm run build, output: dist).

## Edit content
Projects, services and skills live in `src/data/projects.js`.
To add a CV later, put `cv.pdf` in `public/` and link to `/cv.pdf`.
