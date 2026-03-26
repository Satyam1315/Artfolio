# Development Guide

This guide is for day-to-day local development of ArtFolio.

## 1. What You Are Running

- Frontend: React + Vite (default: http://localhost:5173)
- Backend: Express API (default: http://localhost:5000)
- Database: MongoDB
- Media storage: Cloudinary
- Email provider: Mailjet

## 2. Prerequisites

Install these first:

- Node.js 18 or newer (LTS recommended)
- npm 9 or newer
- MongoDB local instance or MongoDB Atlas
- Cloudinary account (for image upload features)
- Mailjet account (for email features like reset password)

## 3. Install Dependencies

From project root:

```bash
npm install
```

From backend folder:

```bash
cd server
npm install
```

## 4. Environment Setup

### 4.1 Backend env file

Create `server/.env` and add:

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/artist-portfolio
NODE_ENV=development
CLIENT_URL=http://localhost:5173
JWT_SECRET=replace_with_a_long_random_secret

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret

MAILJET_API_KEY=your_mailjet_api_key
MAILJET_SECRET_KEY=your_mailjet_secret_key
SENDER_EMAIL=your_verified_sender_email
```

Notes:

- `MONGODB_URI` and `JWT_SECRET` are mandatory for auth and startup.
- Cloudinary keys are required for profile/project image uploads.
- Mailjet keys are required for transactional email flows.

### 4.2 Frontend env file

Create `src/.env` and add:

```env
VITE_API_URL=http://localhost:5000/api
```

## 5. Run the App Locally

### Option A: Start frontend and backend together

From project root:

```bash
npm run dev:full
```

### Option B: Start separately

Terminal 1, from project root:

```bash
npm run dev
```

Terminal 2, from project root:

```bash
npm run server
```

## 6. Verify Local Setup

1. Open http://localhost:5173
2. Confirm backend logs: `Server running on port 5000`
3. Register a user and login
4. Create or edit a project and upload an image
5. Open browser devtools network and confirm calls go to `http://localhost:5000/api/...`

## 7. Development Workflow

- Build frontend for validation:

```bash
npm run build
```

- Lint frontend:

```bash
npm run lint
```

- Restart backend quickly after env changes:

```bash
cd server
npm run dev
```

## 8. API Route Map

Backend prefixes:

- `/api/auth` for auth and session endpoints
- `/api/user` for user profile operations
- `/api/projects` for project CRUD and exploration

Frontend API client location: `src/utils/api.js`

## 9. Common Local Issues

### 9.1 ERR_CONNECTION_REFUSED to /api/auth/me

- Backend is not running or crashed.
- Start backend and check startup errors in terminal.
- Confirm frontend env has `VITE_API_URL=http://localhost:5000/api`.

### 9.2 401 on /auth/me after login

- Cookie not set or not sent.
- Verify backend `CLIENT_URL` is `http://localhost:5173` in development.
- Confirm browser has a `token` cookie after login.

### 9.3 Mongo connection error at boot

- `MONGODB_URI` is invalid or DB is unreachable.
- Validate local Mongo process or Atlas network access.

### 9.4 Image upload fails

- Cloudinary env values are wrong or missing.
- Re-check all three Cloudinary keys in `server/.env`.

### 9.5 Email actions fail

- Mailjet keys or sender are not valid.
- Verify `MAILJET_API_KEY`, `MAILJET_SECRET_KEY`, and `SENDER_EMAIL`.

## 10. Suggested Git Routine

- Create a branch per task.
- Keep commits focused (UI, API, docs separately).
- Re-run `npm run lint` and `npm run build` before opening PR.

