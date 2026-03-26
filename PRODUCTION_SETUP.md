# Production Setup

This guide deploys ArtFolio with:

- Backend on Render
- Frontend on Netlify

## 1. Deployment Topology

- Netlify serves the React app.
- Render hosts the Express API.
- MongoDB Atlas is the production database.
- Cloudinary stores uploaded images.
- Mailjet handles email delivery.

## 2. Production Prerequisites

- Render account
- Netlify account
- MongoDB Atlas cluster and user
- Cloudinary credentials
- Mailjet API credentials and verified sender

## 3. Prepare Production Environment Values

## 3.1 Backend env (Render)

Set these in Render service environment variables:

```env
PORT=10000
NODE_ENV=production
MONGODB_URI=mongodb+srv://<user>:<pass>@<cluster>/<db>?retryWrites=true&w=majority
CLIENT_URL=https://your-netlify-site.netlify.app
JWT_SECRET=replace_with_long_random_production_secret

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret

MAILJET_API_KEY=your_mailjet_api_key
MAILJET_SECRET_KEY=your_mailjet_secret_key
SENDER_EMAIL=your_verified_sender_email
```

Important:

- `CLIENT_URL` must be your exact Netlify domain.
- `JWT_SECRET` must be long and random.
- Keep all secrets only in platform env settings, never in Git.

## 3.2 Frontend env (Netlify)

Set in Netlify Site configuration:

```env
VITE_API_URL=https://your-render-service.onrender.com/api
```

## 4. Deploy Backend to Render

1. Push code to GitHub.
2. In Render, create a new Web Service from your repo.
3. Configure service:
   - Root directory: `server`
   - Runtime: Node
   - Build command: `npm install`
   - Start command: `npm start`
4. Add all backend environment variables from section 3.1.
5. Deploy and wait until health is green.
6. Confirm API base works, for example open:
   - `https://your-render-service.onrender.com/api`

## 5. Deploy Frontend to Netlify

1. In Netlify, create a new site from Git.
2. Configure build:
   - Base directory: leave empty (repo root)
   - Build command: `npm run build`
   - Publish directory: `dist`
3. Add frontend env var from section 3.2.
4. Deploy site.

## 6. SPA Routing on Netlify

For React Router direct URL refresh support, add `public/_redirects` with:

```txt
/* /index.html 200
```

Then redeploy Netlify.

## 7. Production Validation Checklist

After both deployments finish:

1. Open Netlify app URL.
2. Register a test account.
3. Login and verify session persists on refresh.
4. Create a project and upload at least one image.
5. Trigger forgot password flow and verify email delivery.
6. Confirm no CORS errors in browser console.

## 8. CORS and Cookie Notes

This codebase sets auth cookie options by `NODE_ENV`.

- In production, secure cookie mode is enabled.
- Ensure frontend runs on HTTPS (Netlify default) and backend is HTTPS (Render default).
- `CLIENT_URL` must exactly match your Netlify URL so credentials are accepted.

## 9. Common Production Issues

### 9.1 CORS error from frontend

- Check `CLIENT_URL` in Render env.
- Confirm frontend actually calls Render API URL from `VITE_API_URL`.

### 9.2 401 on authenticated endpoints

- Validate cookie is present in browser.
- Confirm `NODE_ENV=production` and HTTPS is used on both services.

### 9.3 Mongo connection failure on Render boot

- Verify Atlas connection string and database user password.
- Confirm Atlas network access allows Render egress.

### 9.4 Image upload fails in production

- Re-check Cloudinary credentials and account limits.

### 9.5 Password reset emails do not arrive

- Verify Mailjet API keys and sender identity.
- Check Mailjet activity logs for rejected messages.

## 10. Post-Deployment Maintenance

- Rotate `JWT_SECRET` and third-party keys on a schedule.
- Monitor Render logs for startup/runtime errors.
- Monitor Netlify deploy logs after each merge.
- Re-run smoke tests after every production release.
