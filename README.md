# The Wild Oasis

A hotel management application built with React and Supabase for managing cabins, bookings, guests, check-ins, check-outs, and hotel settings.

## Live Demo

https://the-wild-oasis-one-mauve.vercel.app/

---

## Features

### Authentication

* Secure user login
* User signup
* User profile update
* Password update
* Avatar upload

### Dashboard

* Hotel statistics overview
* Daily check-ins and check-outs
* Recent bookings
* Booking activity charts
* Sales and occupancy insights

### Cabin Management

* View all cabins
* Create new cabins
* Edit existing cabins
* Delete cabins
* Upload cabin images
* Duplicate cabins

### Booking Management

* View all bookings
* Filter bookings by status
* Sort bookings
* Pagination support

### Check-in & Check-out

* Check guests in
* Check guests out
* Add breakfast during check-in
* View booking details before check-in

### Hotel Settings

* Update minimum booking length
* Update maximum booking length
* Update maximum guests per booking
* Update breakfast price

---

## Tech Stack

### Frontend

* React
* React Router
* Styled Components
* React Hook Form
* React Hot Toast
* Recharts
* React Icons

### Data Fetching & State Management

* TanStack Query (React Query)

### Backend & Database

* Supabase
* PostgreSQL
* Supabase Authentication
* Supabase Storage

---

## Project Structure

```text
src
├── features
├── pages
├── services
├── ui
├── hooks
├── utils
└── context
```

### Folder Overview

* `features` → Business features such as bookings, cabins, dashboard, authentication, and settings.
* `pages` → Route pages.
* `services` → Supabase API functions.
* `ui` → Reusable UI components.
* `hooks` → Custom React hooks.
* `utils` → Helper and utility functions.
* `context` → Shared application context.

---

## Installation

### Clone the repository

```bash
git clone <repository-url>
```

### Install dependencies

```bash
npm install
```

### Create environment variables

Create a `.env` file and add:

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_KEY=your_supabase_anon_key
```

### Run the project

```bash
npm run dev
```

---

## What I Learned

* Building large-scale React applications
* Creating reusable UI components
* Client-side routing with React Router
* Form management with React Hook Form
* Server state management with React Query
* Authentication and authorization with Supabase
* CRUD operations with Supabase
* Image uploads using Supabase Storage
* Dashboard data visualization with Recharts
* Organizing projects using a feature-based architecture
