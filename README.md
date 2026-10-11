# 🛒 বাজার দর | BazarDor

**Know Today's Market Prices at a Glance.**

বাজার দর (BazarDor) is a responsive Bangla market price tracking web application that helps users explore daily prices of essential products in Bangladesh. Users can compare market prices, track price increases and decreases, browse products by category, and view detailed market-wise price information through a clean and user-friendly interface.

## ✨ Key Features

- **📊 Real-Time Style Price Tracking:** View today's product prices, price changes, and percentage increases or decreases through an animated market ticker and dedicated price sections.
- **🛍️ Product Catalog & Categories:** Browse essential products through responsive product cards, category-based filtering, and price sorting in ascending or descending order.
- **📈 Detailed Market Price Comparison:** Explore product details, including minimum, maximum, and average prices, along with market-wise price comparisons.
- **🔐 Secure Authentication & Profile Management:** Register and sign in using email/password or Google and GitHub authentication, manage your profile, and access protected product detail pages.
- **📱 Responsive & User-Friendly Interface:** Enjoy a mobile-friendly layout, loading skeletons, toast notifications, custom 404 pages, and intuitive navigation across devices.

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| Next.js (App Router) | Application structure, routing, and page rendering |
| React | Component-based user interface |
| TypeScript | Type safety and maintainable code |
| Tailwind CSS | Responsive styling and layout |
| DaisyUI / Component Library | Reusable UI components |
| Better Auth | Authentication and social login |
| React Hot Toast | Success, error, and validation notifications |

## 🚀 Core Pages & Functionality

- **Home (`/`)** — Hero banner, animated price ticker, top price risers and fallers, and the complete product catalog.
- **Category (`/category/[id]`)** — Category-specific products with sorting controls and loading states.
- **Product Details (`/product/[slug]`)** — Product summaries, price statistics, and market-wise price comparisons. Requires authentication.
- **Sign In (`/sign-in`)** — Email/password login and social authentication.
- **Sign Up (`/sign-up`)** — User registration and social authentication.
- **My Profile** — View profile information and access profile update functionality.
- **Update Profile** — Update the user's name through a dedicated form.
- **404 Page** — A friendly error page for unknown routes and unavailable products or categories, with a link back to the homepage.

## 🎯 Additional Highlights

- Bengali product prices and percentage changes.
- Numeric sorting that correctly handles Bengali numerals.
- Toast notifications for authentication, validation, and logout events.
- Skeleton loaders while product data is loading.
- Protected routes and authentication-aware navigation.
- Responsive layouts for mobile, tablet, and desktop screens.
- Deployment-ready routing designed to support page refreshes on Vercel.

## ⚙️ Getting Started

### Prerequisites

- Node.js
- npm
- A Better Auth-compatible database and configured authentication providers, as required by your implementation.

### Installation

1. Clone the repository:

   ```bash
   git clone <your-repository-url>
   ```

2. Navigate to the project directory:

   ```bash
   cd bazardor
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Configure the required environment variables in your `.env` file, including the Better Auth secret, database connection, and OAuth credentials where applicable.

5. Start the development server:

   ```bash
   npm run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🌐 Deployment

The application can be deployed to [Vercel](https://vercel.com/).

Before deployment, configure all required environment variables and verify that authentication providers, database connectivity, and dynamic routes work correctly in production.

## 📝 Disclaimer

Market prices displayed by বাজার দর are indicative and may vary depending on location, market conditions, product quality, and availability. Prices should not be considered guaranteed quotations.

---

**বাজার দর — প্রয়োজনীয় পণ্যের দাম এক নজরে।**

*Built with Next.js, TypeScript, and Tailwind CSS.*