# Numerologist Backend API

## Setup Instructions

### 1. Install Dependencies
```bash
cd backend
npm install
```

### 2. Environment Variables
The `.env` file is already configured with your MongoDB credentials.

### 3. Run the Server

**Development mode (with auto-reload):**
```bash
npm run dev
```

**Production mode:**
```bash
npm start
```

The server will run on `http://localhost:5000`

## API Endpoints

### Get Admin Data
```
GET http://localhost:5000/api/admin/data
```

### Update Admin Data
```
PUT http://localhost:5000/api/admin/data
Content-Type: application/json

{
  "marqueeText": "Your new text here"
}
```

### Health Check
```
GET http://localhost:5000/api/health
```

## Deployment

### Deploy to Vercel (Recommended)
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel` in the backend directory
3. Follow the prompts

### Deploy to Heroku
1. Create a Heroku app
2. Set environment variables in Heroku dashboard
3. Push to Heroku: `git push heroku main`

### Deploy to Railway
1. Connect your GitHub repo to Railway
2. Railway will auto-detect and deploy

## Security Notes
- Never commit `.env` file to Git
- The `.env` file is already in `.gitignore`
- For production, use environment variables in your hosting platform
