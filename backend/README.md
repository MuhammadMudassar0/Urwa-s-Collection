# Urwah Trends Backend API

NestJS backend application with PostgreSQL database for Urwah Trends e-commerce platform.

## Prerequisites

- Node.js v22.12 or higher
- PostgreSQL database
- npm or pnpm

## Setup

1. Install dependencies:
```bash
npm install
```

2. Create a `.env` file in the backend directory (copy from `.env.example`):
```bash
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=postgres
DB_NAME=urwah_trends
PORT=3001
NODE_ENV=development
FRONTEND_URL=http://localhost:3000
```

3. Make sure PostgreSQL is running and create the database:
```sql
CREATE DATABASE urwah_trends;
```

4. Run the application:
```bash
# Development mode
npm run start:dev

# Production build
npm run build
npm start
```

## API Endpoints

### Products

- `GET /products` - Get all products
- `GET /products/:id` - Get product by ID
- `POST /products` - Create a new product
- `PATCH /products/:id` - Update a product
- `DELETE /products/:id` - Delete a product

## Database

The application uses TypeORM with PostgreSQL. The database schema is automatically synchronized in development mode.

### Product Entity

- `id` (UUID) - Primary key
- `name` (string) - Product name
- `category` (enum) - Product category (makeup, jewellery, hair-accessories)
- `type` (enum) - Product type
- `price` (decimal) - Product price
- `image` (string) - Product image URL
- `description` (text) - Product description
- `createdAt` (timestamp) - Creation date
- `updatedAt` (timestamp) - Last update date

