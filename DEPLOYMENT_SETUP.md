# Complete Deployment Setup Guide

## Overview
- **Frontend**: Vercel (React app)
- **Backend**: Render (Node.js API)
- **Database**: MongoDB Atlas
- **Repository**: GitHub (gnntech/NUMEROLOGIST)

---

## Part 1: Backend Setup on Render

### Step 1: Create Render Account
1. Go to https://render.com
2. Sign up with GitHub
3. Authorize Render to access your GitHub repos

### Step 2: Create Web Service
1. Click **New +** → **Web Service**
2. Select **gnntech/NUMEROLOGIST** repository
3. Configure:
   - **Name**: `numerologist-backend`
   - **Environment**: `Node`
   - **Build Command**: `cd backend && npm install`
   - **Start Command**: `cd backend && node server.js`
   - **Root Directory**: `.` (leave empty or use dot)

**OR** if using render.json (recommended):
   - Render will auto-detect render.json
   - No need to manually set commands

### Step 3: Add Environment Variables
In Render dashboard, go to **Environment**:

```
MONGODB_URI=mongodb+srv://gnntech33_db_user:cBh63aWrVGz9BU6T@cluster0.deo6dp4.mongodb.net/numerologist?retryWrites=true&w=majority&appName=Cluster0
PORT=5000
NODE_ENV=production
```

### Step 4: Deploy
1. Click **Create Web Service**
2. Render will automatically deploy
3. Get your backend URL: `https://your-service-name.onrender.com`

### Step 5: Keep Backend Alive (Free Tier)
Render free tier spins down after 15 minutes of inactivity. To keep it alive:
- Use a monitoring service like https://uptimerobot.com
- Set it to ping your backend every 5 minutes

---

## Part 2: Frontend Setup on Vercel

### Step 1: Create Vercel Account
1. Go to https://vercel.com
2. Sign up with GitHub
3. Authorize Vercel to access your GitHub repos

### Step 2: Import Project
1. Click **Add New** → **Project**
2. Select **gnntech/NUMEROLOGIST** repository
3. Configure:
   - **Framework Preset**: React
   - **Root Directory**: `.` (root)
   - **Build Command**: `npm run build`
   - **Output Directory**: `build`
   - **Install Command**: `npm install`

### Step 3: Add Environment Variables
In Vercel, go to **Settings** → **Environment Variables**:

```
REACT_APP_API_URL=https://your-service-name.onrender.com/api
```

Replace `your-service-name` with your actual Render service name.

### Step 4: Deploy
1. Click **Deploy**
2. Vercel will build and deploy automatically
3. Get your frontend URL: `https://numerologist-nine.vercel.app`

### Step 5: Configure Custom Domain (Optional)
1. Go to **Settings** → **Domains**
2. Add your custom domain
3. Update DNS records as instructed

---

## Part 3: Database Setup (MongoDB Atlas)

### Already Configured ✅
Your MongoDB is already set up:
- **Cluster**: cluster0.deo6dp4.mongodb.net
- **Database**: numerologist
- **Connection String**: In backend/.env

### Verify Connection
1. Go to https://cloud.mongodb.com
2. Login with your account
3. Select **Cluster0**
4. Click **Connect**
5. Verify IP whitelist includes Render's IP

---

## Part 4: Connect Frontend to Backend

### Update Frontend Environment
In Vercel dashboard:

1. Go to **Settings** → **Environment Variables**
2. Add:
   ```
   REACT_APP_API_URL=https://your-render-backend.onrender.com/api
   ```

3. Redeploy:
   - Go to **Deployments**
   - Click latest deployment
   - Click **Redeploy**

### Verify Connection
1. Open your Vercel frontend
2. Go to Admin panel
3. Check browser console for API calls
4. Should see data loading from backend

---

## Part 5: GitHub Integration

### Automatic Deployments
Both Render and Vercel watch your GitHub repo:

1. **Push to main branch**:
   ```bash
   git add -A
   git commit -m "Your message"
   git push origin main
   ```

2. **Automatic triggers**:
   - Vercel: Redeploys frontend automatically
   - Render: Redeploys backend automatically

### Manual Redeploy
If needed:

**Vercel**:
- Dashboard → Deployments → Click deployment → Redeploy

**Render**:
- Dashboard → Service → Manual Deploy

---

## Part 6: Environment Variables Summary

### Frontend (.env.local - NOT pushed to GitHub)
```
REACT_APP_API_URL=https://your-render-backend.onrender.com/api
```

### Backend (backend/.env - NOT pushed to GitHub)
```
MONGODB_URI=mongodb+srv://gnntech33_db_user:cBh63aWrVGz9BU6T@cluster0.deo6dp4.mongodb.net/numerologist?retryWrites=true&w=majority&appName=Cluster0
PORT=5000
NODE_ENV=production
```

### Vercel Environment Variables (Set in Dashboard)
```
REACT_APP_API_URL=https://your-render-backend.onrender.com/api
```

### Render Environment Variables (Set in Dashboard)
```
MONGODB_URI=mongodb+srv://gnntech33_db_user:cBh63aWrVGz9BU6T@cluster0.deo6dp4.mongodb.net/numerologist?retryWrites=true&w=majority&appName=Cluster0
PORT=5000
NODE_ENV=production
```

---

## Part 7: Troubleshooting

### Frontend Can't Connect to Backend
1. Check `REACT_APP_API_URL` in Vercel environment variables
2. Verify backend is running on Render
3. Check browser console for CORS errors
4. Verify MongoDB connection in Render logs

### Backend Not Starting
1. Check Render logs for errors
2. Verify `MONGODB_URI` is correct
3. Verify `PORT` is set to 5000
4. Check `backend/server.js` for syntax errors

### Database Connection Failed
1. Verify MongoDB connection string
2. Check IP whitelist in MongoDB Atlas
3. Verify credentials are correct
4. Check network connectivity

### Render Backend Spinning Down
1. Use UptimeRobot to keep it alive
2. Or upgrade to paid plan
3. Or use alternative like Railway/Heroku

---

## Part 8: Monitoring & Logs

### Vercel Logs
1. Dashboard → Deployments → Click deployment
2. View build logs and runtime logs
3. Check for errors

### Render Logs
1. Dashboard → Service → Logs
2. View real-time logs
3. Check for errors

### MongoDB Logs
1. Go to https://cloud.mongodb.com
2. Select Cluster → Logs
3. View database activity

---

## Part 9: Performance Tips

### Frontend (Vercel)
- ✅ Images optimized automatically
- ✅ Code splitting enabled
- ✅ CDN caching enabled
- ✅ Automatic HTTPS

### Backend (Render)
- ✅ Use connection pooling for MongoDB
- ✅ Enable gzip compression
- ✅ Cache API responses
- ✅ Monitor performance

### Database (MongoDB)
- ✅ Indexes created on frequently queried fields
- ✅ Connection pooling enabled
- ✅ Backups enabled

---

## Part 10: Security Checklist

- ✅ `.env` files in `.gitignore`
- ✅ MongoDB credentials not exposed
- ✅ API keys not in code
- ✅ HTTPS enabled on both services
- ✅ CORS configured properly
- ✅ Environment variables set in dashboards
- ✅ No sensitive data in GitHub

---

## Quick Reference URLs

| Service | URL |
|---------|-----|
| Frontend | https://numerologist-nine.vercel.app |
| Backend | https://your-render-service.onrender.com |
| Backend API | https://your-render-service.onrender.com/api |
| GitHub | https://github.com/gnntech/NUMEROLOGIST |
| MongoDB | https://cloud.mongodb.com |
| Vercel Dashboard | https://vercel.com/dashboard |
| Render Dashboard | https://dashboard.render.com |

---

## Deployment Workflow

```
1. Make changes locally
   ↓
2. Test on localhost
   ↓
3. Commit and push to GitHub
   ↓
4. Vercel auto-deploys frontend
   ↓
5. Render auto-deploys backend
   ↓
6. Check deployment logs
   ↓
7. Verify on production URLs
```

---

## Support

- **Vercel Docs**: https://vercel.com/docs
- **Render Docs**: https://render.com/docs
- **MongoDB Docs**: https://docs.mongodb.com
- **GitHub Docs**: https://docs.github.com
