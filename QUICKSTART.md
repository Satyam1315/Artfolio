# 🚀 Quick Start - ArtFolio

Get your artist portfolio platform running in 5 minutes!

## Prerequisites ✅

Make sure you have:
- ✅ Node.js installed (v14+)
- ✅ MongoDB running (local or Atlas)
- ✅ Cloudinary account (free)

## Step 1: Clone/Download Project

You already have the project! 🎉

## Step 2: Setup Backend (5 minutes)

### A. Install Backend Dependencies

Open a terminal in the project root:

```bash
cd server
npm install
```

### B. Configure Environment

1. In the `server` folder, you'll find `.env.example`
2. Create a copy and name it `.env`:
   ```bash
   copy .env.example .env
   ```

3. Open `.env` and fill in these values:

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/artist-portfolio
JWT_SECRET=my_super_secret_jwt_key_change_in_production_12345678
CLIENT_URL=http://localhost:5173

# Get these from cloudinary.com
CLOUDINARY_CLOUD_NAME=your_cloud_name_here
CLOUDINARY_API_KEY=your_api_key_here
CLOUDINARY_API_SECRET=your_api_secret_here
```

### C. Get Cloudinary Credentials (2 minutes)

1. Go to https://cloudinary.com/users/register/free
2. Sign up (it's free!)
3. After login, you'll see your dashboard
4. Copy these values to your `.env`:
   - Cloud Name
   - API Key
   - API Secret (click the eye icon to reveal)

### D. Start the Server

**Option 1: Using the batch file (Windows)**
```bash
# In the server folder
start-server.bat
```

**Option 2: Using npm**
```bash
# In the server folder
npm run dev
```

You should see: `Server running on port 5000`

## Step 3: Setup Frontend (2 minutes)

Open a NEW terminal window in the project root:

```bash
npm install
npm run dev
```

**Or use the batch file:**
```bash
start-frontend.bat
```

You should see: `Local: http://localhost:5173`

## Step 4: Open Your Browser 🌐

Visit: http://localhost:5173

You should see the ArtFolio homepage! 🎨

## Step 5: Create Your First Account

1. Click "Sign Up"
2. Enter:
   - Name: "Your Name"
   - Email: "your@email.com"
   - Password: "password123" (min 6 chars)
3. Click "Sign Up"
4. You're in! 🎉

## Troubleshooting 🔧

### "Cannot connect to MongoDB"
**Fix:** Make sure MongoDB is running
```bash
# Windows
net start MongoDB

# Or start MongoDB manually
mongod
```

### "Cloudinary upload failed"
**Fix:** Double-check your Cloudinary credentials in `.env`

### Port 5173 already in use
**Fix:** Stop any other Vite/React apps, or change port in vite.config.js

### Port 5000 already in use
**Fix:** Change PORT in server/.env to 5001

## What's Running? 📡

- **Frontend**: http://localhost:5173 (React app)
- **Backend**: http://localhost:5000 (Express API)
- **Database**: MongoDB on port 27017

## Test the App 🧪

1. **Edit Profile**
   - Go to Dashboard → Edit Profile
   - Upload a profile picture
   - Add your bio, skills, location
   - Save changes

2. **Create a Project**
   - Go to Dashboard → New Project
   - Upload 1-10 images
   - Fill in project details
   - Click Create Project

3. **View Public Profile**
   - Go to Dashboard
   - Click "View Profile"
   - This is what others will see!

## Next Steps 🎯

✅ Customize your profile
✅ Add your artwork
✅ Share your profile link
✅ Explore other features

## Need Help? 🆘

Check these files:
- `SETUP_GUIDE.md` - Detailed setup instructions
- `README.md` - Full documentation
- `PROJECT_SUMMARY.md` - Complete feature list

## Common Tasks 📝

### Stop the servers
Press `Ctrl + C` in each terminal window

### Restart the servers
Just run the start commands again

### Reset database
Delete the database in MongoDB:
```bash
mongo
use artist-portfolio
db.dropDatabase()
```

### Clear cookies
In browser: DevTools (F12) → Application → Cookies → Delete all

## Success! 🎉

You now have a fully functional artist portfolio platform!

**Your URLs:**
- Homepage: http://localhost:5173
- Dashboard: http://localhost:5173/dashboard
- API: http://localhost:5000/api

Happy creating! 🎨
