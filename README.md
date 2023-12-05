# GrubDash Backend

Welcome to the GrubDash backend project! This project is a backend implementation for a startup called GrubDash, where I've built an API with specific routes to support the frontend development.

## Project Overview

GrubDash is a restaurant delivery application, and the backend is responsible for handling dishes and orders with complex validation. As part of this project, I demonstrated my skills in building APIs, using middleware, and adhering to RESTful design principles.

## Project Structure

The project is organized as follows:

- `src/`: Contains the source code for the backend.
  - `app.js`: The Express application.
  - `data/`: Directory holding dishes and orders data.
  - `dishes/`: Handles dishes routes and controllers.
  - `errors/`: Error handling functions.
  - `orders/`: Handles orders routes and controllers.
  - `server.js`: Server setup.
  - `utils/`: Utility functions, including `nextId`.
- `test/`: Contains test files.

## Getting Started

To run this project locally, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/grubdash.git
   cd grubdash

1. Install dependencies:
   bash
   Copy code
   npm install
2. Run tests:
   bash
   Copy code
   npm test
3. Start the server:
   bash
   Copy code
   npm start


Routes

Dishes
GET /dishes: Retrieve a list of all dishes.
POST /dishes: Create a new dish.
GET /dishes/:dishId: Retrieve details of a specific dish.
PUT /dishes/:dishId: Update details of a specific dish.

Orders
GET /orders: Retrieve a list of all orders.
POST /orders: Create a new order.
GET /orders/:orderId: Retrieve details of a specific order.
PUT /orders/:orderId: Update details of a specific order.
DELETE /orders/:orderId: Delete a specific order.

