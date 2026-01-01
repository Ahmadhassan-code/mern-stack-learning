# Full Stack Web Development with the M Stack

## 🚀 Course Overview

Learn to build full stack web applications using MongoDB, Express.js, React, and Node.js (the M Stack).

Gain hands-on experience creating RESTful APIs, managing databases, and developing interactive frontend interfaces.

Build a responsive, dynamic product store application with features to create, update, and delete products.

Implement modular, maintainable code for both backend and frontend development.

Explore deployment strategies to serve both API and React frontend under one domain.

## 🛠 Backend Development

### Setting Up Environment & Dependencies

Initialize project with npm init -y in root for easier deployment.

Install essential packages: Express (web framework), Mongoose (MongoDB interaction), dotenv (environment variables).

Use modern ES modules syntax via "type": "module" in package.json.

Use nodemon as a dev dependency to auto-restart server on code changes.

### Building the API

Create server.js as API entry point.

Define routes for CRUD operations on products: GET all, POST create, PUT update, DELETE delete.

Implement RESTful API logic with Express routing and async controller functions.

Use Mongoose schemas and models to define product structure (name, price, image) with validation and timestamps.

Connect to MongoDB Atlas with connection string stored in .env for security.

Handle errors and invalid IDs gracefully with status codes and messages.

### Code Structure & Modularization

Separate routes into /routes/product.route.js.

Move controller logic to /controllers/product.controller.js for maintainability.

Import and use routes in server.js prefixed by /api/products.

### Deployment Preparation

Use environment variables for port configuration.

Serve React frontend statically from backend using Express static middleware.

Build React app (npm run build), then serve build folder in production.

Define combined scripts in package.json for building and starting both backend and frontend.

## 🎨 Frontend Development

### Initial Setup and UI Library

Setup React app with npm create vite@latest and JavaScript template.

Use Chakra UI for fast, responsive, accessible component styling.

Wrap app with ChakraProvider and BrowserRouter for routing.

### Routing and Components

Define multiple pages with React Router: Homepage and Create Product page.

Create reusable components like Navbar, ProductCard, and Modal.

Implement responsive layouts using Chakra UI Grid, Flex, Stack components.

Add light/dark mode toggle using Chakra’s useColorMode hook and icons.

### State Management with Zustand

Use Zustand for global state management to avoid prop drilling.

Store products array and CRUD functions globally for easy access across components.

Fetch products on homepage mount and update state on create, update, delete operations.

### Features & Functionality

Create product form with validation and toast notifications for success/error.

List all products on homepage with responsive card UI showing image, name, price.

Enable update and delete operations with modals and confirmation.

UI updates immediately after data changes without page refresh.

## 📦 Deployment & GitHub Integration

Combine backend and frontend deployment on one server/port.

Use Node.js path module to serve static React build folder in production.

Configure start and build scripts for deployment.

Push project to GitHub with .gitignore excluding sensitive .env files.

Deploy to Render.com with environment variables set securely.

Verify live app with full CRUD functionality and responsive design.

## 🔑 Key Insights

Full stack app development requires clear separation of concerns: API, controllers, routes, models for backend; components, pages, state management for frontend.

Modern tooling (ESModules, Zustand, Chakra UI) streamline development and improve maintainability.

Environment configuration and deployment require planning for serving static assets alongside API.

Zustand provides a simple yet powerful global state solution, avoiding complex prop drilling in React.

Using toast notifications and modals enhances UX by providing immediate feedback and interactions.

Responsive design and dark mode are essential for modern web apps.

Automating backend restart with nodemon and frontend builds with scripts accelerates development.

