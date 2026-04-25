# Admin Panel — E-Commerce Dashboard

The admin dashboard for managing products and orders. Built with **React 19**, **Vite**, and **Tailwind CSS v4**.

---

## Features

- **Secure Login** — Token-based authentication for admin access
- **Add Products** — Create new products with images, categories, sizes, and pricing
- **Product List** — View all products with options to edit or remove
- **Order Management** — View customer orders and update order statuses
- **Responsive Layout** — Sidebar navigation with clean dashboard design
- **Toast Notifications** — Feedback for all actions

---

## Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| React | 19.2.5 | UI library |
| React DOM | 19.2.5 | DOM rendering |
| React Router DOM | 7.14.1 | Client-side routing |
| Tailwind CSS | 4.2.4 | Utility-first CSS |
| Axios | 1.15.1 | HTTP client |
| React Toastify | 11.1.0 | Toast notifications |
| Vite | 8.0.9 | Build tool |

---

## Project Structure

```
admin/
├── public/              # Static assets (favicon, icons)
├── src/
│   ├── assets/          # Icons and images
│   │   ├── add_icon.png
│   │   ├── assets.js
│   │   ├── logo.png
│   │   ├── order_icon.png
│   │   ├── parcel_icon.svg
│   │   └── upload_area.png
│   ├── components/      # Reusable UI components
│   │   ├── Login.jsx
│   │   ├── Navbar.jsx
│   │   └── Sidebar.jsx
│   ├── pages/           # Route-level page components
│   │   ├── Add.jsx
│   │   ├── List.jsx
│   │   └── Orders.jsx
│   ├── App.jsx          # Main app with auth guard & routes
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
| `npm run dev` | Start development server (port 5174) |
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
   
   Create a `.env` file in the `admin/` directory:
   ```env
   VITE_BACKEND_URL=http://localhost:4000
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

The admin panel will be available at **http://localhost:5174**.

---

## Authentication

The admin panel uses **token-based authentication**:

- Admin credentials are verified via `/api/user/admin`
- On successful login, a JWT token is stored in `localStorage`
- The token is automatically attached to all API requests
- Unauthenticated users are redirected to the login page
- Logging out clears the token and refreshes the page

---

## Routes

| Route | Page | Description |
|-------|------|-------------|
| `/add` | Add | Create a new product |
| `/list` | List | View and manage all products |
| `/orders` | Orders | View and update customer orders |

---

## Global Exports

`App.jsx` exports two global values used across the app:

```js
export const backendUrl = import.meta.env.VITE_BACKEND_URL;
export const currency = '$';
```

---

## Styling

This project uses **Tailwind CSS v4** with the Vite plugin. The layout features:

- Full-height gray background (`bg-gray-50 min-h-screen`)
- Fixed sidebar with flexible main content area
- Responsive margin and padding for the dashboard content

---

## Backend Integration

All API requests are made to the backend server. Make sure:

1. The backend server is running on port `4000`
2. `VITE_BACKEND_URL` is correctly set in your `.env` file
3. You have valid admin credentials to log in

---

## Build for Production

```bash
npm run build
```

The production build will be output to the `dist/` directory.

