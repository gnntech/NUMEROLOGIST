# Backend Setup Guide

## 🚀 Quick Start

### 1. Install Backend Dependencies
```bash
cd backend
npm install
```

### 2. Start the Backend Server
```bash
# Development mode (with auto-reload)
npm run dev

# OR Production mode
npm start
```

The backend will run on `http://localhost:5000`

### 3. Start the React Frontend
In a new terminal:
```bash
# Go back to root directory
cd ..

# Start React app
npm start
```

The React app will run on `http://localhost:3000`

## ✅ Verify Setup

1. Backend health check: http://localhost:5000/api/health
2. Get admin data: http://localhost:5000/api/admin/data
3. Open React app: http://localhost:3000

## 📝 API Endpoints

### Get All Admin Data
```
GET http://localhost:5000/api/admin/data
```

### Update Promo Cards
```
PATCH http://localhost:5000/api/admin/data/promo-cards
Content-Type: application/json

{
  "promoCards": [...]
}
```

### Update Testimonials
```
PATCH http://localhost:5000/api/admin/data/testimonials
Content-Type: application/json

{
  "testimonials": [...]
}
```

### Update Products
```
PATCH http://localhost:5000/api/admin/data/products
Content-Type: application/json

{
  "products": [...]
}
```

### Update Marquee Text
```
PATCH http://localhost:5000/api/admin/data/marquee
Content-Type: application/json

{
  "marqueeText": "Your new text"
}
```

## 🌐 Deployment

### Deploy Backend to Vercel

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Create `vercel.json` in backend folder:
```json
{
  "version": 2,
  "builds": [
    {
      "src": "server.js",
      "use": "@vercel/node"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "server.js"
    }
  ]
}
```

3. Deploy:
```bash
cd backend
vercel
```

4. Set environment variables in Vercel dashboard:
   - `MONGODB_URI`
   - `NODE_ENV=production`

5. Update `.env.local` in React app with your Vercel backend URL:
```
REACT_APP_API_URL=https://your-backend.vercel.app/api
```

### Alternative: Deploy to Railway

1. Go to https://railway.app
2. Connect your GitHub repository
3. Select the `backend` folder
4. Add environment variables in Railway dashboard
5. Deploy!

## 🔒 Security Notes

- ✅ MongoDB credentials are now secure in backend `.env`
- ✅ Never commit `.env` files to Git
- ✅ Use environment variables in production
- ✅ CORS is enabled for your frontend

## 🐛 Troubleshooting

### Backend won't start
- Check if MongoDB URI is correct in `backend/.env`
- Ensure port 5000 is not in use

### Frontend can't connect to backend
- Verify backend is running on port 5000
- Check `.env.local` has correct `REACT_APP_API_URL`
- Restart React app after changing `.env.local`

### CORS errors
- Backend has CORS enabled by default
- If issues persist, check `server.js` cors configuration
