# Dynamic Admin Panel - Complete Setup

## ✅ What's Been Completed

### 1. Backend (MongoDB + Express)

**Enhanced Database Schema:**
- ✅ Testimonials now support both text and video testimonials
  - `isVideoTestimonial` flag
  - `video` field for video URL/path
  - `avatar` field for video testimonial avatars
  - `quote` field (optional for video testimonials)

- ✅ Products enhanced with:
  - `amazonLink` field
  - `inStock` boolean field

- ✅ **NEW: Packages Collection**
  - `id`, `name`, `icon`
  - `includes` array with `text` and `highlight` fields

**API Endpoints:**
- `GET /api/admin/data` - Fetch all admin data
- `PUT /api/admin/data` - Update all admin data
- `PATCH /api/admin/data/promo-cards` - Update promo cards
- `PATCH /api/admin/data/testimonials` - Update testimonials
- `PATCH /api/admin/data/products` - Update products
- `PATCH /api/admin/data/packages` - **NEW: Update packages**
- `PATCH /api/admin/data/marquee` - Update marquee text

**Default Data Seeded:**
- 3 Promo cards
- 9 Testimonials (6 text + 3 video)
- 9 Products (all bracelets with pricing and stock status)
- 6 Packages (Silver, Gold, Platinum, Diamond, Sapphire, Emerald)

### 2. Frontend (React + TypeScript)


- ✅ Added `Package` and `PackageInclude` interfaces
- ✅ Added `updatePackages()` function
- ✅ Enhanced `Testimonial` interface with video support
- ✅ Enhanced `Product` interface with amazonLink and inStock

**Admin Panel (src/pages/Admin.tsx):**
- ✅ **NEW: Packages Tab** - Full CRUD for packages
  - Add/Edit/Delete packages
  - Manage package features with highlight toggle
  - Upload package icons
  - Dynamic feature list management

- ✅ **Enhanced Testimonials Tab**
  - Toggle between text and video testimonials
  - Upload video files for video testimonials
  - Upload avatar images for video testimonials
  - Text testimonials with quote field

- ✅ **Enhanced Products Tab**
  - Amazon link field
  - In Stock checkbox
  - All existing fields (name, price, description, image)

**Frontend Pages - Now Fully Dynamic:**

1. **Shop Page (src/pages/Shop.tsx)**
   - ✅ Fetches products from MongoDB via API
   - ✅ Displays dynamic product cards
   - ✅ Shows "Out of Stock" badge
   - ✅ Amazon links from database
   - ✅ No hardcoded products

2. **Package Page (src/pages/Package.tsx)**
   - ✅ Fetches packages from MongoDB via API
   - ✅ Displays dynamic package cards
   - ✅ Feature highlights (orange text) from database
   - ✅ Package icons from database
   - ✅ No hardcoded packages

3. **Testimonial Section (src/components/TestimonialSection.tsx)**
   - ✅ Fetches testimonials from MongoDB via API
   - ✅ Separates text and video testimonials
   - ✅ Auto-sliding text testimonial cards
   - ✅ Video testimonial player with navigation
   - ✅ No hardcoded testimonials

## 🎯 How to Use

### Admin Panel Access
1. Navigate to `/admin`
2. Login with:
   - Username: `admin`
   - Password: `admin`

### Managing Content

**Testimonials:**
1. Click "Testimonials" tab
2. Click "+ Add Testimonial"
3. Toggle "Video Testimonial" checkbox:
   - **Text**: Enter name, location, and quote
   - **Video**: Upload video file and avatar image
4. Click "Save"

**Products:**
1. Click "Products" tab
2. Click "+ Add Product"
3. Fill in:
   - Name, Price, Description
   - Amazon Link
   - Check/uncheck "In Stock"
   - Upload product image
4. Click "Save"

**Packages:**
1. Click "Packages" tab
2. Click "+ Add Package"
3. Fill in package name
4. Upload package icon
5. Add features:
   - Click "+ Add" to add feature
   - Enter feature text
   - Check "Orange" to highlight in orange
   - Click "✕" to remove feature
6. Click "Save"

## 🚀 Running the Application

### Backend
```bash
cd backend
npm install
npm run dev
```
Backend runs on: http://localhost:5000

### Frontend
```bash
npm install
npm start
```
Frontend runs on: http://localhost:3000

## 📊 Database Structure

**MongoDB Collection: `admindatas`**
```javascript
{
  promoCards: [{ id, title, image, mobileImage, description }],
  testimonials: [{ 
    id, name, location, rating,
    quote?, // for text testimonials
    video?, avatar?, // for video testimonials
    isVideoTestimonial 
  }],
  products: [{ 
    id, name, image, price, description,
    amazonLink, inStock 
  }],
  packages: [{ 
    id, name, icon,
    includes: [{ text, highlight }]
  }],
  marqueeText: String
}
```

## 🔧 Environment Variables

**Frontend (.env.local):**
```
REACT_APP_API_URL=http://localhost:5000/api
```

**Backend (backend/.env):**
```
MONGODB_URI=mongodb+srv://jayshinde4554_db_user:FDTFbWhX3thXSEan@cluster0.8yjn2sr.mongodb.net/numerologist?retryWrites=true&w=majority&appName=Cluster0
PORT=5000
NODE_ENV=development
```

## ✨ Features

### Fully Dynamic
- ✅ No hardcoded data in frontend
- ✅ All content managed through admin panel
- ✅ Real-time updates from MongoDB
- ✅ Image upload support (base64)
- ✅ Video upload support for testimonials

### Admin Panel Features
- ✅ Clean, intuitive UI
- ✅ Inline editing
- ✅ Confirmation dialogs for deletions
- ✅ Image/video preview
- ✅ Responsive design
- ✅ Tab-based navigation

### Frontend Features
- ✅ Automatic data fetching on page load
- ✅ Loading states
- ✅ Fallback to default data if API fails
- ✅ Smooth animations
- ✅ Responsive design

## 🎨 Styling
- Theme colors: Dark #2E2D2F, Orange #FE7028
- Fonts: Bebas Neue (headings), Matter (body)
- All components styled consistently

## 📝 Notes
- Backend must be running for frontend to fetch data
- MongoDB connection is required
- Images are stored as base64 in database
- Video files should be uploaded to public folder or use URLs
- Default data is seeded automatically on first run

## 🔐 Security Notes
- Change admin credentials in production
- MongoDB credentials should be in environment variables
- Never commit .env files to git
- Use proper authentication in production

## 🚢 Deployment
- Backend: Deploy to Vercel/Railway/Heroku
- Frontend: Deploy to Vercel/Netlify
- Update REACT_APP_API_URL with production backend URL
- Ensure MongoDB connection string is in production environment variables
