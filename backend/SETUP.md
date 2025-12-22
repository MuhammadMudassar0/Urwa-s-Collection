# Backend Setup Guide

## Quick Start

### 1. Install Dependencies
```bash
cd backend
npm install
```

### 2. Set Up PostgreSQL Database

#### Option A: Using PostgreSQL locally
1. Make sure PostgreSQL is installed and running
2. Create the database:
```sql
CREATE DATABASE urwah_trends;
```

#### Option B: Using Docker (Recommended for quick setup)
```bash
docker run --name urwah-postgres \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=urwah_trends \
  -p 5432:5432 \
  -d postgres:15
```

### 3. Configure Environment Variables

The `.env` file has been created with default values. Update it if your PostgreSQL credentials are different:

```env
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=postgres  # Change this to your PostgreSQL password
DB_NAME=urwah_trends
PORT=3001
NODE_ENV=development
FRONTEND_URL=http://localhost:3000
```

### 4. Start the Backend Server

```bash
# Development mode (with auto-reload)
npm run start:dev

# Or with watch mode
npm run start:watch
```

The server will start on `http://localhost:3001`

### 5. Verify the Server is Running

Open your browser or use curl:
```bash
curl http://localhost:3001/products
```

You should see an empty array `[]` if the database is empty, or a list of products if you've added any.

## Troubleshooting

### Connection Refused Error
- Make sure the backend server is running on port 3001
- Check that PostgreSQL is running and accessible
- Verify your database credentials in `.env`

### Database Connection Error
- Ensure PostgreSQL is running: `pg_isready` or check your PostgreSQL service
- Verify the database exists: `psql -U postgres -l | grep urwah_trends`
- Check your credentials match the `.env` file

### Port Already in Use
- Change the `PORT` in `.env` to a different port (e.g., 3002)
- Update `NEXT_PUBLIC_API_URL` in your frontend `.env.local` if you change the port


