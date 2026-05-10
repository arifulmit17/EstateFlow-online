# 🏡 EstateFlow AI

## 📌 Project Title & One-Line Summary

**EstateFlow AI** — A modern AI-powered real estate platform for discovering, analyzing, buying, renting, and managing properties seamlessly.

---

## ❗ Problem Statement

Traditional real estate platforms often lack intelligent recommendations, personalized experiences, and efficient communication between buyers, renters, investors, and agents. Users frequently struggle with:

* Finding properties that match their exact preferences
* Analyzing market trends and investment opportunities
* Connecting with trusted agents efficiently
* Managing inquiries and appointments in one place
* Accessing verified and updated property listings

---

## 💡 Solution Overview

EstateFlow AI solves these problems by combining modern real estate features with artificial intelligence to create a smarter property discovery experience.

The platform enables users to:

* Explore verified property listings
* Get AI-powered property recommendations
* Analyze market trends and property insights
* Schedule appointments with agents
* Save favorite properties
* Manage real estate activities through personalized dashboards

EstateFlow AI delivers a seamless, scalable, and user-friendly real estate ecosystem for buyers, renters, investors, and agents.

---

## 🛠️ Tech Stack

### Frontend

* Next.js (App Router)
* TypeScript
* Tailwind CSS
* shadcn/ui
* Framer Motion
* Zustand / Redux Toolkit

### Backend

* Node.js
* Express.js
* TypeScript

### Database & ORM

* PostgreSQL
* Prisma ORM

### AI Features

* OpenAI API
* AI-powered recommendations
* Smart property descriptions
* AI-generated tags & insights

### Authentication

* JWT Authentication
* HTTP-only Cookies
* Role-Based Access Control

### Payments

* Stripe API
* Stripe Webhooks

### Cloud & Media

* Cloudinary (Image Uploads)
* Virtual Property Tours

### Deployment

* Vercel (Frontend)
* Railway / Render / Vercel (Backend)
* Neon / Supabase PostgreSQL

---

## 🚀 Key Features

### 🔐 Authentication & User Management

* Secure login & registration
* Role-based access (Buyer / Agent / Admin)
* Profile management
* Protected dashboards
* Email verification & account security

---

### 🏡 Property Management

* Create, update, and delete property listings
* Upload property galleries & thumbnails
* Property search with advanced filters
* Property categories (Apartment, Villa, Commercial, etc.)
* Featured properties system
* Availability & status tracking

---

### 🤖 AI-Powered Features

* Personalized property recommendations
* AI-generated property descriptions
* Smart property tagging
* Market trend insights
* Intelligent search experience

---

### 📍 Property Discovery Experience

* Interactive property browsing
* City & location-based search
* Property detail pages
* Virtual tours & video previews
* Save favorite properties

---

### 📅 Appointment & Inquiry System

* Book appointments with agents
* Send property inquiries
* Agent-client communication
* Inquiry tracking dashboard

---

### 💳 Payments & Premium Features

* Secure Stripe payment integration
* Premium property promotions
* Subscription-ready architecture

---

### 📊 Dashboards & Analytics

#### Buyer Dashboard

* Saved properties
* Appointment tracking
* Inquiry history

#### Agent Dashboard

* Property management
* Inquiry management
* Appointment scheduling
* Property performance analytics

#### Admin Dashboard

* User management
* Property moderation
* Reports & analytics
* Platform monitoring

---

### 📱 Modern UX Features

* Fully responsive design
* Dark / Light mode
* Smooth animations
* Optimized SEO
* Fast loading performance
* Accessible UI components

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/arifulmit17/estateflow-online.git
cd estateflow-ai
```

---

### 2️⃣ Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file and configure the required environment variables.

Run Prisma migrations:

```bash
npx prisma migrate dev
```

Start the development server:

```bash
npm run dev
```

---

### 3️⃣ Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

---

## 🌐 Live URLs

* Frontend: https://estateflow-ai.vercel.app
* Backend API: https://estateflow-api.vercel.app

---

## 🔑 Environment Variables

### Backend (`.env`)

```env
DATABASE_URL=
JWT_SECRET=
JWT_REFRESH_SECRET=

OPENAI_API_KEY=

STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=

CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=

CLIENT_URL=
PORT=
```

---

### Frontend (`.env.local`)

```env
NEXT_PUBLIC_API_URL=
NEXT_PUBLIC_STRIPE_PUBLIC_KEY=
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=
```

---

## 📂 Project Architecture

### Frontend Structure

* App Router architecture
* Modular component system
* Shared UI components
* Reusable hooks & services
* Feature-based organization

### Backend Structure

* RESTful API architecture
* Service & controller pattern
* Prisma-based database layer
* Secure authentication middleware
* Scalable modular structure

---

## 📌 Notes

* Ensure PostgreSQL is configured correctly
* Never commit `.env` files to GitHub
* Configure Stripe webhooks properly
* Cloudinary is required for image uploads
* AI features require valid OpenAI API credentials

---

## 🌍 Final Thoughts

EstateFlow AI is designed to modernize the real estate experience through intelligent technology, seamless user interactions, and scalable architecture.

From discovering dream homes to analyzing investment opportunities, EstateFlow AI provides everything needed for the future of real estate in one powerful platform.