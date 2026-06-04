# MyApp — React + Node.js Fullstack Starter

## Quick Start

```bash
# 1. Install all dependencies (root + client + server)
npm run install-all

# 2. Run both frontend and backend together
npm run dev
```

- React app → http://localhost:3000
- Node.js API → http://localhost:5000

## Project Structure

```
myapp/
├── client/         → React frontend (Create React App)
├── server/         → Node.js + Express backend
├── .env            → Environment variables
└── package.json    → Root scripts (concurrently)
```

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Run client + server together |
| `npm run client` | Run React app only |
| `npm run server` | Run Node.js server only |
| `npm run install-all` | Install all dependencies |

## API Endpoints

| Method | Route | Description |
|---|---|---|
| GET | /api/health | Health check |
| GET | /api/users | Get all users |
| POST | /api/users | Create user |
| GET | /api/users/:id | Get user by ID |
| PUT | /api/users/:id | Update user |
| DELETE | /api/users/:id | Delete user |
