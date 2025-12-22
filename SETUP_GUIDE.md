# ArtFolio - Complete Setup Guide

This guide will walk you through setting up the entire ArtFolio platform from scratch.

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

1. **Node.js** (v14 or higher)
   - Download from: https://nodejs.org/
   - Verify installation: `node --version`

2. **MongoDB**
   - Option A: Install locally from https://www.mongodb.com/try/download/community
   - Option B: Use MongoDB Atlas (cloud) - https://www.mongodb.com/cloud/atlas

3. **Cloudinary Account** (Free tier is sufficient)
   - Sign up at: https://cloudinary.com/users/register/free

## 🚀 Quick Start

### Step 1: Frontend Setup

1. Open a terminal in the project root directory
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Frontend will be running at: http://localhost:5173

### Step 2: Backend Setup

1. Open a NEW terminal window
2. Navigate to the server directory:
   ```bash
   cd server
   ```
3. Install server dependencies:
   ```bash
   npm install
   ```

### Step 3: Environment Configuration

1. In the `server` folder, create a `.env` file:
   ```bash
   # Windows Command Prompt
   copy .env.example .env

   # Or manually create the file
   ```

2. Edit the `.env` file with your configuration:

   ```env
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/artist-portfolio
   JWT_SECRET=put_a_random_secure_string_here_at_least_32_characters
   CLIENT_URL=http://localhost:5173

   # Cloudinary Configuration (get from Cloudinary dashboard)
   CLOUDINARY_CLOUD_NAME=your_cloud_name_here
   CLOUDINARY_API_KEY=your_api_key_here
   CLOUDINARY_API_SECRET=your_api_secret_here
   ```

### Step 4: Get Cloudinary Credentials

1. Go to https://cloudinary.com/
2. Sign up or log in
3. Go to your Dashboard
4. You'll see:
   - **Cloud Name** (e.g., "dxxxxxxxx")
   - **API Key** (e.g., "123456789012345")
   - **API Secret** (click to reveal)
5. Copy these values to your `.env` file

### Step 5: Start MongoDB

**For Local MongoDB:**
```bash
# Windows
# MongoDB should start automatically as a service
# Or run:
mongod

# Mac/Linux
sudo systemctl start mongod
# Or
brew services start mongodb-community
```

**For MongoDB Atlas:**
1. Create a cluster on MongoDB Atlas
2. Click "Connect"
3. Choose "Connect your application"
4. Copy the connection string
5. Update your `.env` file:
   ```env
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/artist-portfolio?retryWrites=true&w=majority
   ```
   (Replace username, password, and cluster details)

### Step 6: Start the Backend Server

From the `server` directory:
```bash
npm run dev
```

Backend will be running at: http://localhost:5000

## ✅ Verify Everything is Working

1. **Frontend**: Visit http://localhost:5173
   - You should see the homepage

2. **Backend**: Visit http://localhost:5000
   - You might see a blank page or error (this is normal)

3. **Database**: Check MongoDB is running:
   ```bash
   # For local MongoDB
   mongo
   # Then type:
   show dbs
   ```

## 🎨 Using the Application

### Create Your First Account

1. Go to http://localhost:5173
2. Click "Sign Up"
3. Fill in your details:
   - Name
   - Email
   - Password (min 6 characters)
4. Click "Sign Up"
5. You'll be redirected to your Dashboard

### Set Up Your Profile

1. From Dashboard, click "Edit Profile"
2. Add:
   - Profile picture (click camera icon)
   - Your bio
   - Profession (e.g., "Graphic Designer")
   - Location
   - Skills (comma-separated)
   - Social media links
3. Click "Save Changes"

### Add Your First Project

1. From Dashboard, click "New Project"
2. Upload images (1-10 images)
3. Fill in project details:
   - Title
   - Description
   - Category
   - Tags
   - Optional: Project URL, Client, Date
4. Click "Create Project"

### View Your Public Profile

1. From Dashboard, click "View Profile"
2. This is what others will see
3. Share this link with clients!

## 🔧 Troubleshooting

### Frontend won't start
- Check if port 5173 is available
- Delete `node_modules` and run `npm install` again
- Clear browser cache

### Backend won't start
- Check if port 5000 is available
- Verify MongoDB is running
- Check `.env` file configuration
- Look for error messages in terminal

### Images won't upload
- Verify Cloudinary credentials in `.env`
- Check internet connection
- Ensure images are under 10MB each

### Can't login/register
- Check MongoDB connection
- Verify JWT_SECRET is set in `.env`
- Clear browser cookies
- Check browser console for errors

### Database connection error
```
MongooseError: connect ECONNREFUSED 127.0.0.1:27017
```
**Solution**: Start MongoDB service
```bash
# Windows
net start MongoDB

# Mac
brew services start mongodb-community

# Linux
sudo systemctl start mongod
```

### Cloudinary upload fails
**Solution**: 
1. Double-check credentials in `.env`
2. Ensure no extra spaces in the values
3. Verify account is active on Cloudinary

## 📱 Testing Features

### Authentication
- ✅ Register new account
- ✅ Login with credentials
- ✅ Stay logged in (cookie-based)
- ✅ Logout

### Profile Management
- ✅ Upload profile picture
- ✅ Edit personal info
- ✅ Add skills and social links
- ✅ Toggle "Available for work"

### Project Management
- ✅ Create new project
- ✅ Upload multiple images
- ✅ Edit project details
- ✅ Delete projects
- ✅ Mark as featured

### Public Pages
- ✅ View artist profiles
- ✅ View project details
- ✅ Explore all projects
- ✅ Filter by category
- ✅ Search projects

## 🌐 Production Deployment

### Frontend (Vercel/Netlify)
1. Push code to GitHub
2. Connect to Vercel or Netlify
3. Set build command: `npm run build`
4. Set publish directory: `dist`
5. Add environment variable: `VITE_API_URL=your-backend-url`

### Backend (Heroku/Railway/Render)
1. Push code to GitHub
2. Connect to your hosting platform
3. Set environment variables (all from `.env`)
4. Deploy

### Database (MongoDB Atlas)
- Already cloud-based
- Update `MONGODB_URI` in production `.env`

## 🎯 Next Steps

1. **Customize Design**: Modify colors in TailwindCSS
2. **Add Features**: Implement likes, comments, follows
3. **SEO**: Add meta tags and descriptions
4. **Analytics**: Integrate Google Analytics
5. **Email**: Add email notifications with SendGrid
6. **CDN**: Use Cloudinary's CDN for faster image delivery

## 📚 Useful Commands

### Frontend
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Check for code issues
```

### Backend
```bash
npm start            # Start production server
npm run dev          # Start development server with nodemon
```

### Database
```bash
mongo                # Open MongoDB shell
mongod               # Start MongoDB server
```

## 🆘 Getting Help

- Check the README.md for detailed documentation
- Review error messages in terminal
- Check browser console (F12) for frontend errors
- Ensure all dependencies are installed
- Verify environment variables are set correctly

## 📞 Support

If you encounter issues:
1. Check this guide thoroughly
2. Review error messages
3. Verify all prerequisites are met
4. Check that all services are running
5. Clear cache and restart servers

Happy building! 🎨
