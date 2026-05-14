# Saffron & Ember — Fine Dining Delivered

Welcome to the Saffron & Ember project! This is a modern, responsive web application for a premium restaurant, featuring an interactive menu, a dynamic shopping cart, a user authentication system, and a React-powered testimonials carousel.

## 🚀 Project Overview
Our team built a professional, high-end food delivery website. The goal was to combine seamless user experience (smooth animations, intuitive navigation) with robust technical implementation (React integration, strict form validations, and LocalStorage data persistence).

## 🛠️ Technologies Used
- **HTML5:** Semantic structuring and multi-page layout (`index.html`, `login.html`).
- **CSS3:** Custom variables, Responsive Media Queries, Flexbox/Grid layouts, and CSS Animations.
- **JavaScript (ES6):** DOM manipulation, Form Regex validation, Cart logic, and Dark Mode toggling.
- **React JS (Extra Tech):** Integrated via CDN to power the interactive Testimonials Carousel and Review Submission system.
- **Web Storage API:** Utilized `localStorage` to persist the user's Theme preference, Shopping Cart, User Accounts, and Custom Reviews.
- **Google Maps Embed API:** Interactive location mapping.

## 📂 Repository Structure
```
UID Project/
├── index.html            # Main single-page application (Home, About, Menu, Order, Contact)
├── login.html            # Authentication page (Login / Sign Up)
├── style.css             # Global stylesheet (Themes, Layouts, Animations)
├── script.js             # Core Vanilla JavaScript (Cart, Form Validations, Nav)
├── react-components.js   # React code (JSX) for Testimonials Carousel
└── README.md             # Project documentation (You are here)
```

## ✨ Key Features
1. **Dynamic Shopping Cart:** Users can add/remove items and adjust quantities. The cart updates totals instantly.
2. **Dark / Light Mode:** A fully responsive theme toggle that remembers user preference.
3. **Authentication System:** Users can sign up and log in (simulated via LocalStorage).
4. **React Testimonials:** Logged-in users can write and submit live reviews with a 5-star rating system.
5. **Strict Validations:** All forms (Order, Contact, Login) are protected by Regex to ensure valid emails, secure passwords, and correct phone numbers.
6. **Smooth Animations:** Scroll-reveal animations and micro-interactions on hover.

## 🏃 How to Run
Since this project uses no complex backend, you simply need to open the `index.html` file in any modern web browser (Chrome, Firefox, Safari). No build tools (like Webpack or Vite) or local servers are strictly required!

---
*Created for the UID Web Development Project.*
