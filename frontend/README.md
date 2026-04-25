# Frontend — E-Commerce Store

The customer-facing storefront of the e-commerce application. Built with **React 19**, **Vite**, and **Tailwind CSS v4**.

---

## Features

- **Home Page** — Hero banner, best sellers, latest collection, newsletter
- **Collection Page** — Browse all products with filters
- **Product Details** — Size selection, add to cart, related products
- **Cart** — Manage items, view cart total
- **Checkout** — Place orders with Stripe, Razorpay, or Cash on Delivery
- **Orders** — View order history and statuses
- **Authentication** — User login & registration
- **Profile** — User profile management
- **Search** — Real-time product search
- **Responsive Design** — Mobile-first with Tailwind CSS

---

## Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| React | 19.2.4 | UI library |
| React DOM | 19.2.4 | DOM rendering |
| React Router DOM | 7.14.0 | Client-side routing |
| Tailwind CSS | 4.2.2 | Utility-first CSS |
| Axios | 1.15.2 | HTTP client |
| React Toastify | 11.0.5 | Toast notifications |
| Vite | 8.0.4 | Build tool |

---

## Project Structure

```
frontend/
├── public/              # Static assets (favicon, icons)
├── src/
│   ├── assets/          # Images, icons, logos
│   ├── components/      # Reusable UI components
│   │   ├── BestSeller.jsx
│   │   ├── CartTotal.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── LatestCollection.jsx
│   │   ├── Navbar.jsx
│   │   ├── NewsletterBox.jsx
│   │   ├── OurPolicy.jsx
│   │   ├── ProductItem.jsx
│   │   ├── RelatedProducts.jsx
│   │   ├── SearchBar.jsx
│   │   └── Title.jsx
│   ├── context/         # React Context
│   │   └── ShopContext.jsx
│   ├── pages/           # Route-level page components
│   │   ├── About.jsx
│   │   ├── Cart.jsx
│   │   ├── Collection.jsx
│   │   ├── Contact.jsx
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   ├── Orders.jsx
│   │   ├── PlaceOrder.jsx
│   │   ├── Product.jsx
│   │   └── Profile.jsx
│   ├── App.jsx          # Main app component with routes
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── index.html
├── package.json
├── vite.config.js
├── eslint.config.js
└── .gitignore
```

---

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server (port 5173) |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

---

## Setup

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Configure environment variables**
   
   Create a `.env` file in the `frontend/` directory:
   ```env
   VITE_BACKEND_URL=http://localhost:4000
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

The application will be available at **http://localhost:5173**.

---

## Routes

| Route | Page | Description |
|-------|------|-------------|
| `/` | Home | Landing page with featured products |
| `/collection` | Collection | All products with filters |
| `/product/:productId` | Product | Single product details |
| `/cart` | Cart | Shopping cart |
| `/place-order` | PlaceOrder | Checkout & payment |
| `/orders` | Orders | Order history |
| `/login` | Login | User authentication |
| `/profile` | Profile | User profile |
| `/about` | About | About page |
| `/contact` | Contact | Contact page |

---

## Styling

This project uses **Tailwind CSS v4** with the Vite plugin. Custom styles are defined in `src/index.css`.

The layout uses responsive padding:
```css
px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]
```

---

## State Management

Global state (cart, products, user info, currency, etc.) is managed via **React Context** in `src/context/ShopContext.jsx`.

---

## Backend Integration

All API requests are made to the backend server. Make sure the backend is running and `VITE_BACKEND_URL` is correctly set in your `.env` file.

---

## Build for Production

```bash
npm run build
```

The production build will be output to the `dist/` directory.

