# Urwah Trends - E-commerce Application

A modern, full-stack e-commerce application for displaying and managing makeup products, jewellery, and hair accessories.

## Features

- 🎨 **Beautiful UI** - Modern design with eye-catching colors using Tailwind CSS and shadcn/ui
- 🔍 **Search Functionality** - Search products by name, description, or type
- 🎯 **Advanced Filtering** - Filter by category, product type, and price range
- 📱 **Fully Responsive** - Optimized for mobile, tablet, and desktop
- 🛒 **Shopping Cart** - Add products to cart with quantity management
- 💳 **Checkout** - Complete checkout flow with payment account details
- 👨‍💼 **Admin Panel** - Full CRUD operations for product management
- 🗄️ **Database Integration** - PostgreSQL database with NestJS backend
- 💎 **Product Categories**:
  - Makeup Products (foundation, base, face powder, blush)
  - Jewellery (bracelets, necklaces, rings, earrings)
  - Hair Accessories (hair bands, ponies, clips, bows, hair catchers, pins)
- 💰 **PKR Pricing** - All prices displayed in Pakistani Rupees

## Tech Stack

### Frontend
- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Beautiful component library
- **React Query** - Data fetching and caching
- **Zustand** - State management for cart
- **Radix UI** - Accessible component primitives
- **Lucide React** - Icon library

### Backend
- **NestJS** - Progressive Node.js framework
- **PostgreSQL** - Relational database
- **TypeORM** - Object-Relational Mapping
- **TypeScript** - Type-safe backend development

## Getting Started

### Prerequisites

- Node.js v22.12 (as specified in `.nvmrc`)
- pnpm v9 or higher
- PostgreSQL database

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd urwah-trends
```

2. Install frontend dependencies:
```bash
pnpm install
```

3. Install backend dependencies:
```bash
cd backend
npm install
```

4. Set up the database:
   - Create a PostgreSQL database named `urwah_trends`
   - Update the database credentials in `backend/.env` (copy from `backend/.env.example`)

5. Set up environment variables:
   - Create `backend/.env` with your database credentials
   - Optionally create `.env.local` in the root for frontend environment variables:
     ```
     NEXT_PUBLIC_API_URL=http://localhost:3001
     ```

6. Start the backend server:
```bash
cd backend
npm run start:dev
```

7. Start the frontend development server (in a new terminal):
```bash
pnpm dev
```

8. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
urwah-trends/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── cart/              # Shopping cart page
│   ├── checkout/          # Checkout page
│   ├── admin/             # Admin panel
│   └── globals.css        # Global styles
├── backend/               # NestJS backend
│   ├── src/
│   │   ├── products/     # Product module (entity, service, controller)
│   │   ├── app.module.ts # Root module
│   │   └── main.ts       # Application entry point
│   └── package.json
├── components/            # Design system components
│   └── ui/               # shadcn/ui components
├── features/             # Feature-specific components
│   ├── product-card/     # Product card component
│   ├── product-filters/  # Filter component
│   ├── product-search/   # Search component
│   └── products-page/     # Products page logic
├── lib/                  # Core libraries
│   ├── api-client.ts     # API client for backend
│   └── react-query-provider.tsx # React Query provider
├── services/             # API services
│   └── products-service.ts # Product API service
├── store/                # State management
│   └── cart-store.ts     # Cart Zustand store
├── types/               # TypeScript types
│   └── product.ts       # Product type definitions
└── utils/               # Utility functions
    └── cn.ts            # className utility
```

## Features Overview

### User Features
- **Search**: Real-time search across product names, descriptions, and types
- **Filters**: Filter by category, product type, and price range
- **Shopping Cart**: Add products to cart, manage quantities, and view cart
- **Checkout**: Complete checkout with payment account details (bank account, EasyPaisa, JazzCash)
- **Product Display**: Products grouped by category with responsive grid layout

### Admin Features
- **Product Management**: Full CRUD operations (Create, Read, Update, Delete)
- **Product List**: View all products in a grid layout
- **Add/Edit Products**: Form-based product creation and editing
- **Delete Products**: Remove products from the database

### Backend API
- RESTful API endpoints for product management
- PostgreSQL database with TypeORM
- Automatic database schema synchronization in development
- CORS enabled for frontend communication

## Customization

### Colors
The theme colors can be customized in `app/globals.css` by modifying the CSS variables:

```css
:root {
  --primary: 330 81% 60%; /* Pink/Magenta primary color */
  --secondary: 280 50% 90%; /* Light purple secondary */
  /* ... */
}
```

### Products
Products are now stored in the PostgreSQL database. Use the Admin Panel (`/admin`) to manage products, or use the API directly.

## API Endpoints

### Products
- `GET /products` - Get all products
- `GET /products/:id` - Get product by ID
- `POST /products` - Create a new product
- `PATCH /products/:id` - Update a product
- `DELETE /products/:id` - Delete a product

## Build for Production

### Frontend
```bash
pnpm build
pnpm start
```

### Backend
```bash
cd backend
npm run build
npm start
```

## License

This project is private and proprietary.

