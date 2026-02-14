# Fix Render Deployment Error

## Problem
```
Error: Cannot find module '/opt/render/project/src/backend/backend/server.js'
```

This means Render is looking in the wrong directory (double backend path).

## Solution

### Option 1: Update Render Settings (Recommended)

1. Go to https://dashboard.render.com
2. Select your `numerologist-backend` service
3. Click **Settings**
4. Find **Build & Deploy** section
5. Update:
   - **Build Command**: `cd backend && npm install`
   - **Start Command**: `cd backend && node server.js`
   - **Root Directory**: `.` (leave empty or use dot)
6. Click **Save**
7. Click **Manual Deploy** → **Deploy latest commit**

### Option 2: Use render.json (Already Created)

The `render.json` file has been created in your project root with correct commands.

1. Commit and push:
   ```bash
   git add render.json
   git commit -m "Add render.json configuration"
   git push origin main
   ```

2. Go to Render dashboard
3. Click **Manual Deploy** → **Deploy latest commit**
4. Render will auto-detect render.json

## Verify Fix

After deploying:
1. Check Render logs
2. Should see: `✅ MongoDB Connected Successfully`
3. Should see: `🚀 Server running on port 5000`
4. Test health endpoint: `https://your-service.onrender.com/api/health`

## If Still Not Working

1. **Check Root Directory**: Should be `.` (dot) or empty
2. **Check Build Command**: Should be `cd backend && npm install`
3. **Check Start Command**: Should be `cd backend && node server.js`
4. **Check Environment Variables**: All set correctly
5. **Manual Deploy**: Click deploy again

## Correct Directory Structure

```
NUMEROLOGIST/
├── backend/
│   ├── server.js          ← Start here
│   ├── package.json
│   ├── models/
│   ├── routes/
│   └── .env
├── src/
│   ├── pages/
│   ├── components/
│   └── ...
├── render.json            ← Render config
└── package.json
```

## Quick Commands

```bash
# Test locally
cd backend
npm install
node server.js

# Should output:
# ✅ MongoDB Connected Successfully
# 🚀 Server running on port 5000
```

## Support

- Render Docs: https://render.com/docs
- Node.js on Render: https://render.com/docs/deploy-node-express-app
