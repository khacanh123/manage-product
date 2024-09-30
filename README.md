# Project Overview

This project is built using modern web technologies for creating a responsive frontend interface. It includes functionality for user login, product listing, product creation, and viewing product details, with full state management using Redux Toolkit and API integration.

## Technologies Used

- **Frontend:** ReactJS, TypeScript, Redux Toolkit, TailwindCSS, React Toastify, Axios

## Project Structure

The project is organized into the following directories:

- **api:** Contains API functions using `createAsyncThunk` from Redux Toolkit.
- **pages:** Contains the user interface pages (Login, ListProduct, CreateProduct, DetailProduct).
- **router:** Handles routing and navigation.
- **store:** Declares the store and slices for managing application state.
- **utils:** Custom utility functions, including notifications using React Toastify.

## User Interface Design and API Integration

The user interface consists of four main pages:

1. **Login**
2. **ListProduct**
3. **CreateProduct**
4. **DetailProduct**

Each page makes API calls written in the `api` directory.

## Functionality Testing

### Test Cases

| Test Case | Status |
| --- | --- |
| **Login Page:** No input in the form > Click login (Expected: Show error notification) | OK |
| **Login Page:** Incorrect credentials (Expected: Show error notification) | OK |
| **Login Page:** Correct credentials (Expected: Show success notification and redirect to product list) | OK |
| **Product List Page:** Only admin users see the add new product button and product item actions (edit, delete) | OK |
| **Product List Page:** Delete action (Expected: Show confirmation popup before deletion) | OK |
| **Create/Edit Product Page:** No product name entered (Expected: Show error notification) | OK |
| **Create/Edit Product Page:** Save button action should update the product list upon successful submission | OK |

## Installation and Setup

1. Clone the repository.
   ```bash
   git clone https://github.com/khacanh123/manage-product.git
