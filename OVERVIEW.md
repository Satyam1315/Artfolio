# 🎨 ArtFolio - Complete Artist Portfolio Platform

## 📋 Table of Contents

1. [Overview](#overview)
2. [Features](#features)
3. [Tech Stack](#tech-stack)
4. [Project Structure](#project-structure)
5. [Quick Start](#quick-start)
6. [Documentation](#documentation)
7. [Screenshots & UI](#screenshots--ui)
8. [API Reference](#api-reference)
9. [Deployment](#deployment)
10. [Contributing](#contributing)

---

## Overview

**ArtFolio** is a modern, full-stack web application that empowers artists and creatives to build stunning online portfolios, showcase their work, and connect with potential clients. Built with the latest web technologies, it offers a seamless experience across all devices.

### Key Highlights

- 🎨 **Beautiful Design** - Modern, clean UI with smooth animations
- 🔐 **Secure Authentication** - Cookie-based JWT authentication
- 🖼️ **Image Management** - Cloudinary integration for optimized delivery
- 📱 **Fully Responsive** - Works perfectly on mobile, tablet, and desktop
- ⚡ **Fast & Modern** - Built with React 19 and TailwindCSS v4.1
- 🌐 **Public Profiles** - Share your work with a unique profile URL

---

## Features

### For Artists

✅ **Personal Dashboard**
- Manage all your projects in one place
- View statistics (total projects, featured items)
- Quick access to profile editing

✅ **Project Management**
- Upload multiple images per project (up to 10)
- Rich text descriptions
- Categorize by type (illustration, design, photography, etc.)
- Add tags, client info, project URLs
- Mark featured projects
- Edit and delete projects anytime

✅ **Profile Customization**
- Upload profile picture
- Add bio (up to 500 characters)
- List your skills
- Add social media links (6 platforms)
- Set profession and location
- Toggle "Available for Work" status

✅ **Public Portfolio**
- Beautiful public profile page
- Showcase all your projects
- Filter by category
- Professional presentation
- Shareable link

### For Visitors

✅ **Explore Portfolios**
- Browse all artist portfolios
- Search for specific projects
- Filter by category
- View detailed project pages
- Contact artists directly

---

## Tech Stack

### Frontend
| Technology | Version | Purpose |
|-----------|---------|---------|
| React | 19.2.0 | UI Library |
| React Router | Latest | Client-side routing |
| TailwindCSS | 4.1.17 | Styling |
| Axios | Latest | HTTP Client |
| Lucide React | Latest | Icons |
| js-cookie | Latest | Cookie management |
| Vite | Latest | Build tool |

### Backend
| Technology | Version | Purpose |
|-----------|---------|---------|
| Node.js | 14+ | Runtime |
| Express | 4.18.2 | Web framework |
| MongoDB | 8.0.0 | Database |
| Mongoose | 8.0.0 | ODM |
| JWT | 9.0.2 | Authentication |
| Bcrypt.js | 2.4.3 | Password hashing |
| Cloudinary | 1.41.0 | Image storage |
| Multer | 1.4.5 | File uploads |

---

## Project Structure

```
artist-portfolio/
│
├── src/                          # Frontend source
│   ├── components/               # Reusable components
│   │   ├── Navbar.jsx
│   │   ├── ProjectCard.jsx
│   │   ├── LoadingSpinner.jsx
│   │   └── ProtectedRoute.jsx
│   │
│   ├── pages/                    # Page components
│   │   ├── Home.jsx             # Landing page
│   │   ├── Login.jsx            # Login form
│   │   ├── Register.jsx         # Registration form
│   │   ├── Dashboard.jsx        # Artist dashboard
│   │   ├── Profile.jsx          # Public profile
│   │   ├── Settings.jsx         # Profile settings
│   │   ├── CreateProject.jsx    # New project
│   │   ├── EditProject.jsx      # Edit project
│   │   ├── Explore.jsx          # Browse portfolios
│   │   └── ProjectDetail.jsx    # Project details
│   │
│   ├── context/                  # React Context
│   │   └── AuthContext.jsx      # Auth state
│   │
│   ├── utils/                    # Utilities
│   │   └── api.js               # API client
│   │
│   ├── App.jsx                   # Main app
│   ├── main.jsx                  # Entry point
│   └── index.css                 # Global styles
│
├── server/                       # Backend source
│   ├── models/                   # Database models
│   │   ├── User.js              # User schema
│   │   └── Project.js           # Project schema
│   │
│   ├── routes/                   # API routes
│   │   ├── auth.js              # Auth endpoints
│   │   ├── user.js              # User endpoints
│   │   └── project.js           # Project endpoints
│   │
│   ├── middleware/               # Express middleware
│   │   └── auth.js              # JWT verification
│   │
│   ├── config/                   # Configuration
│   │   └── cloudinary.js        # Cloudinary setup
│   │
│   ├── server.js                 # Express server
│   ├── package.json              # Dependencies
│   ├── .env.example              # Env template
│   └── start-server.bat          # Windows helper
│
├── public/                       # Static files
├── package.json                  # Frontend deps
├── vite.config.js                # Vite config
├── tailwind.config.js            # Tailwind config
├── README.md                     # Main documentation
├── QUICKSTART.md                 # Quick setup guide
├── SETUP_GUIDE.md                # Detailed setup
├── PROJECT_SUMMARY.md            # Feature summary
└── start-frontend.bat            # Windows helper
```

---

## Quick Start

### 1. Prerequisites

- Node.js (v14+)
- MongoDB (local or Atlas)
- Cloudinary account (free)

### 2. Install Dependencies

```bash
# Frontend
npm install

# Backend
cd server
npm install
```

### 3. Configure Environment

Create `server/.env`:

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/artist-portfolio
JWT_SECRET=your_secret_key_here
CLIENT_URL=http://localhost:5173
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

### 4. Start Services

```bash
# Terminal 1: Backend
cd server
npm run dev

# Terminal 2: Frontend
npm run dev
```

### 5. Open Browser

Visit: http://localhost:5173

**See QUICKSTART.md for detailed instructions**

---

## Documentation

| Document | Description |
|----------|-------------|
| `README.md` | Complete project documentation |
| `QUICKSTART.md` | 5-minute setup guide |
| `SETUP_GUIDE.md` | Detailed step-by-step setup |
| `PROJECT_SUMMARY.md` | Feature list and architecture |

---

## Screenshots & UI

### Design Principles

1. **Clean & Modern** - Minimal design, maximum impact
2. **No Gradients** - Solid colors for professional look
3. **Smooth Animations** - TailwindCSS transitions
4. **Generous Spacing** - Breathing room for content
5. **Responsive** - Mobile-first approach

### Color Scheme

- **Primary**: Gray-900 (#111827) - Main text and buttons
- **Background**: White (#FFFFFF) - Clean canvas
- **Borders**: Gray-200, Gray-300 - Subtle separation
- **Hover**: Scale and color transitions

### Typography

- **Headings**: Bold, sizes from 2xl to 7xl
- **Body**: Regular weight, readable sizes
- **Hierarchy**: Clear visual structure

---

## API Reference

### Authentication Endpoints

```
POST   /api/auth/register    - Register new user
POST   /api/auth/login       - Login user
POST   /api/auth/logout      - Logout user
GET    /api/auth/me          - Get current user
```

### User Endpoints

```
GET    /api/user/:userId          - Get public profile
PUT    /api/user/profile          - Update profile (auth)
POST   /api/user/profile-image    - Upload image (auth)
```

### Project Endpoints

```
GET    /api/projects/user/:userId     - Get user's projects
GET    /api/projects/:projectId       - Get single project
GET    /api/projects                  - Get own projects (auth)
POST   /api/projects                  - Create project (auth)
PUT    /api/projects/:projectId       - Update project (auth)
DELETE /api/projects/:projectId       - Delete project (auth)
```

**All authenticated endpoints require cookie-based JWT token**

---

## Deployment

### Frontend (Vercel/Netlify)

1. Push to GitHub
2. Connect repository
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Add env var: `VITE_API_URL`

### Backend (Railway/Render/Heroku)

1. Push to GitHub
2. Connect repository
3. Add all environment variables
4. Deploy

### Database (MongoDB Atlas)

1. Create free cluster
2. Get connection string
3. Update production env

---

## Contributing

Contributions are welcome! Here's how:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

---

## Security

- ✅ Password hashing with bcrypt
- ✅ JWT authentication
- ✅ HTTP-only cookies
- ✅ CORS protection
- ✅ Input validation
- ✅ Secure file uploads

---

## Performance

- ⚡ Image optimization via Cloudinary
- ⚡ Code splitting with Vite
- ⚡ Lazy loading
- ⚡ Efficient database queries
- ⚡ CDN delivery for images

---

## Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers

---

## License

MIT License - Free to use for personal and commercial projects

---

## Support

For issues and questions:
1. Check documentation files
2. Review error messages
3. Verify environment setup
4. Check browser console
5. Ensure all services are running

---

## Acknowledgments

- **TailwindCSS** - Amazing utility framework
- **Cloudinary** - Image optimization
- **Lucide** - Beautiful icons
- **MongoDB** - Flexible database
- **Vite** - Lightning-fast builds

---

## Future Roadmap

- [ ] Like/favorite system
- [ ] Comments on projects
- [ ] Follow artists
- [ ] Email notifications
- [ ] Portfolio themes
- [ ] Advanced analytics
- [ ] Messaging system
- [ ] Collaboration features
- [ ] Export to PDF
- [ ] Advanced search

---

**Built with ❤️ for artists and creatives**

**Version**: 1.0.0
**Status**: Production Ready ✅
**Last Updated**: November 2025

---

## Quick Links

- [Quick Start Guide](QUICKSTART.md)
- [Setup Guide](SETUP_GUIDE.md)
- [Project Summary](PROJECT_SUMMARY.md)
- [Cloudinary Setup](https://cloudinary.com/)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)

---

**Happy Creating! 🎨**
