# ✅ Testing Checklist - ArtFolio

Use this checklist to verify all features are working correctly.

## 🚀 Initial Setup

- [ ] Frontend runs on <http://localhost:5173>
- [ ] Backend runs on <http://localhost:5000>
- [ ] MongoDB is connected
- [ ] No console errors in browser
- [ ] No errors in server terminal

---

## 🔐 Authentication

### Registration

- [ ] Can access registration page at `/register`
- [ ] Form validates required fields
- [ ] Shows error for passwords < 6 characters
- [ ] Shows error for mismatched passwords
- [ ] Shows error if email already exists
- [ ] Successfully creates new user
- [ ] Redirects to dashboard after registration
- [ ] Sets authentication cookie

### Login

- [ ] Can access login page at `/login`
- [ ] Form validates required fields
- [ ] Shows error for invalid credentials
- [ ] Successfully logs in existing user
- [ ] Redirects to dashboard after login
- [ ] Sets authentication cookie
- [ ] Cookie persists after browser refresh

### Logout

- [ ] Logout button visible when logged in
- [ ] Successfully logs out user
- [ ] Clears authentication cookie
- [ ] Redirects to home page
- [ ] Can't access protected routes after logout

---

## 👤 User Profile Management

### View Profile

- [ ] Can access own profile from dashboard
- [ ] Profile displays all user information
- [ ] Shows placeholder if no profile image
- [ ] Social links work correctly
- [ ] Skills display correctly
- [ ] "Available for Work" badge shows when enabled

### Edit Profile - Basic Info

- [ ] Can access settings page
- [ ] Name field pre-fills with current value
- [ ] Can update name
- [ ] Can update profession
- [ ] Can update location
- [ ] Can update bio (max 500 chars)
- [ ] Character counter works
- [ ] Can add/edit skills (comma-separated)
- [ ] Can toggle "Available for Work"
- [ ] Shows success message after save
- [ ] Changes reflect on profile immediately

### Edit Profile - Image Upload

- [ ] Camera icon visible on profile picture
- [ ] Can select image file
- [ ] Image uploads to Cloudinary
- [ ] Shows success message
- [ ] New image displays immediately
- [ ] Image is cropped/resized properly

### Edit Profile - Social Links

- [ ] Can add website URL
- [ ] Can add Instagram link
- [ ] Can add Twitter link
- [ ] Can add LinkedIn link
- [ ] Can add Behance link
- [ ] Can add Dribbble link
- [ ] Links validate as URLs
- [ ] Links save correctly

---

## 📁 Project Management

### Create Project

- [ ] Can access create project page
- [ ] Can upload 1 image
- [ ] Can upload multiple images (up to 10)
- [ ] Can't upload more than 10 images
- [ ] Image preview shows before upload
- [ ] Can remove preview images
- [ ] Title field is required
- [ ] Description field is required
- [ ] Category dropdown works
- [ ] Can add tags (comma-separated)
- [ ] Can add optional project URL
- [ ] Can add optional client name
- [ ] Can select completion date
- [ ] Can mark as featured
- [ ] Images upload to Cloudinary
- [ ] Project saves to database
- [ ] Redirects to dashboard after creation
- [ ] New project appears in dashboard

### View Projects

- [ ] Dashboard shows all user projects
- [ ] Projects display in grid layout
- [ ] Project images load correctly
- [ ] Project titles and descriptions show
- [ ] Featured badge shows for featured projects
- [ ] Empty state shows when no projects

### Edit Project

- [ ] Can click Edit button on project
- [ ] Edit form pre-fills with current data
- [ ] Existing images display
- [ ] Can remove existing images
- [ ] Can add new images
- [ ] Can update title
- [ ] Can update description
- [ ] Can change category
- [ ] Can update tags
- [ ] Can update optional fields
- [ ] Changes save correctly
- [ ] Redirects to dashboard after save
- [ ] Updated project displays changes

### Delete Project

- [ ] Delete button visible on each project
- [ ] Shows confirmation dialog
- [ ] Can cancel deletion
- [ ] Successfully deletes project
- [ ] Images removed from Cloudinary
- [ ] Project removed from database
- [ ] Dashboard updates immediately
- [ ] Project no longer accessible

---

## 🌐 Public Pages

### Home Page

- [ ] Accessible at root URL `/`
- [ ] Hero section displays
- [ ] Feature cards display
- [ ] CTA buttons work
- [ ] Navigation links work
- [ ] Responsive on mobile

### Explore Page

- [ ] Accessible at `/explore`
- [ ] Shows all public projects
- [ ] Search bar works
- [ ] Category filters work
- [ ] Projects display in grid
- [ ] Empty state shows if no results
- [ ] Responsive layout

### Public Profile

- [ ] Accessible at `/profile/:userId`
- [ ] Shows artist information
- [ ] Profile image displays
- [ ] Bio displays
- [ ] Skills display as tags
- [ ] Social links clickable
- [ ] Shows all artist projects
- [ ] Category filter works
- [ ] Project count accurate
- [ ] Contact button works (if email set)

### Project Detail

- [ ] Accessible at `/project/:projectId`
- [ ] Main image displays
- [ ] Image gallery works
- [ ] Previous/next buttons work
- [ ] Thumbnail navigation works
- [ ] Project info displays
- [ ] Artist info displays
- [ ] Tags display
- [ ] Client name shows (if set)
- [ ] Project URL works (if set)
- [ ] Completion date shows (if set)
- [ ] Can click to view artist profile
- [ ] Back button works

---

## 🔒 Protected Routes

- [ ] Can't access `/dashboard` when logged out
- [ ] Can't access `/dashboard/settings` when logged out
- [ ] Can't access `/dashboard/project/new` when logged out
- [ ] Can't access `/dashboard/project/edit/:id` when logged out
- [ ] Redirects to login page when accessing protected routes
- [ ] Can access all protected routes when logged in

---

## 📱 Responsive Design

### Mobile (< 768px)

- [ ] Navigation hamburger menu works
- [ ] Mobile menu opens/closes
- [ ] All pages display correctly
- [ ] Forms are usable
- [ ] Images scale properly
- [ ] Touch interactions work
- [ ] No horizontal scroll

### Tablet (768px - 1024px)

- [ ] Layout adjusts appropriately
- [ ] Grid layouts adjust column count
- [ ] Navigation displays correctly
- [ ] Forms are properly sized

### Desktop (> 1024px)

- [ ] Full navigation visible
- [ ] Grid layouts show 3 columns
- [ ] Proper spacing and alignment
- [ ] Hover effects work

---

## 🎨 UI/UX Features

### Animations

- [ ] Page transitions smooth
- [ ] Button hover effects work
- [ ] Card hover effects work
- [ ] Image zoom on hover
- [ ] Loading spinner displays
- [ ] Fade-in animations work
- [ ] Scale animations work

### Forms

- [ ] Input focus states work
- [ ] Validation messages show
- [ ] Success messages show
- [ ] Error messages show
- [ ] Loading states during submit
- [ ] Disabled states work

### Navigation

- [ ] Active route highlighting
- [ ] Smooth scrolling
- [ ] Back buttons work
- [ ] Breadcrumb navigation
- [ ] Modal close buttons

---

## 🔍 Error Handling

- [ ] Shows error for network failures
- [ ] Shows error for invalid credentials
- [ ] Shows error for duplicate email
- [ ] Shows error for upload failures
- [ ] Shows error for not found pages
- [ ] Error messages are user-friendly
- [ ] Can recover from errors

---

## ⚡ Performance

- [ ] Pages load quickly
- [ ] Images load progressively
- [ ] No laggy animations
- [ ] Forms submit quickly
- [ ] Search is responsive
- [ ] Filters update quickly
- [ ] No memory leaks on page changes

---

## 🔐 Security

- [ ] Passwords are not visible in requests
- [ ] JWT token stored in HTTP-only cookie
- [ ] Can't access other users' edit pages
- [ ] Can't delete other users' projects
- [ ] API validates authentication
- [ ] CORS properly configured

---

## 🧪 Edge Cases

- [ ] Handles very long names gracefully
- [ ] Handles very long descriptions
- [ ] Handles special characters in text
- [ ] Handles large image files
- [ ] Handles slow network connections
- [ ] Handles browser back/forward
- [ ] Handles page refresh
- [ ] Handles multiple tabs

---

## 📊 Data Validation

- [ ] Email format validated
- [ ] URL format validated
- [ ] Password minimum length enforced
- [ ] Required fields enforced
- [ ] Maximum lengths respected
- [ ] Date inputs work correctly

---

## 🎯 User Flows

### Complete Registration Flow

1. [ ] Visit home page
2. [ ] Click "Sign Up"
3. [ ] Fill registration form
4. [ ] Submit form
5. [ ] Redirected to dashboard
6. [ ] See welcome message

### Complete Project Creation Flow

1. [ ] Login to account
2. [ ] Navigate to dashboard
3. [ ] Click "New Project"
4. [ ] Upload images
5. [ ] Fill project details
6. [ ] Submit form
7. [ ] Redirected to dashboard
8. [ ] See new project

### Complete Profile Setup Flow

1. [ ] Login to account
2. [ ] Go to settings
3. [ ] Upload profile picture
4. [ ] Fill in all fields
5. [ ] Add social links
6. [ ] Save changes
7. [ ] View public profile
8. [ ] Verify all information displays

---

## ✅ Final Checks

- [ ] All features work as expected
- [ ] No console errors
- [ ] No broken links
- [ ] All images load
- [ ] All forms submit
- [ ] Navigation works everywhere
- [ ] Mobile experience is smooth
- [ ] Ready for production

---

## 📝 Notes

Use this space to note any issues found:

```code
Issue 1: 
Fix: 

Issue 2:
Fix:

Issue 3:
Fix:
```

---

**Testing Complete! 🎉**

Date: ___________
Tester: ___________
Status: ___________
