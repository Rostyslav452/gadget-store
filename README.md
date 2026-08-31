# Gadget Store

## Overview

Welcome to the **Gadget Store**, a modern e-commerce web application focused on browsing and purchasing electronic devices and accessories. The project provides a convenient shopping experience with a product catalog, product details, cart functionality, responsive layouts, and interactive UI elements.

The application is designed with a focus on usability, clean component structure, responsive behavior, and a consistent experience across different screen sizes.

## Demo

You can view a live demo of the application here:

**[DEMO](https://rostyslav452.github.io/gadget-store/)**


## Design Reference

Based on professional Figma mockups:

- [Original Design](<https://www.figma.com/file/FRxncC4lfyhs6og1L6FGEU/Phone-catalog-(V2)-Rounded-Style-2?node-id=0%3A1>)

## Key Features

- **Product Catalog**: Browse available gadgets and electronic devices in a structured product catalog.
- **Product Details**: View detailed information about individual products, including images, specifications, and pricing.
- **Product Search**: Quickly find products using the search functionality.
- **Filtering and Sorting**: Easily narrow down products and organize them according to different criteria.
- **Shopping Cart**: Add products to the cart, change quantities, and remove products when necessary.
- **Favorites**: Save products for later by adding them to a favorites list.
- **Responsive Design**: The application adapts to desktop, tablet, and mobile screen sizes.
- **Interactive UI**: Buttons, navigation elements, product cards, and other interface components provide immediate visual feedback.
- **Navigation**: Convenient navigation between catalog pages, product pages, cart, and other sections of the application.
- **Loading and Error States**: The application handles loading and unavailable data gracefully.

## Challenges

Developing the application involved several challenges, particularly around combining multiple e-commerce features into a consistent and responsive user experience.

### Key Challenges

- **Feature Integration**: Combining product catalog functionality, product details, cart management, favorites, search, filtering, and navigation into one cohesive application.
- **Responsive Design**: Making the interface comfortable to use across different screen sizes while preserving the layout and functionality of the original design.
- **State Management**: Keeping product, cart, favorites, and UI state synchronized across different pages and components.
- **Reusable Components**: Creating reusable components for product cards, buttons, navigation elements, controls, and other common interface sections.
- **User Experience**: Providing clear interactions and feedback so that users can easily browse products and manage their shopping experience.
- **Data Handling**: Organizing product data and handling different application states such as loading, empty results, and errors.
- **Performance**: Keeping the application responsive by avoiding unnecessary rendering and optimizing component behavior and data usage.
- **Cross-Device Compatibility**: Testing the interface across different viewport sizes and making sure all major features remain accessible.

These challenges were addressed through component-based development, reusable UI patterns, responsive styling, and iterative testing.

## Installation & Setup

To install the project and run it locally, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/username/gadget-store.git
```

2. Navigate to the project directory:

```bash
cd gadget-store
```

3. Install dependencies:

```bash
npm install
```

4. Start the local development server:

```bash
npm start
```

If the project uses a Vite development server, use:

```bash
npm run dev
```

5. Build the project for production:

```bash
npm run build
```

## Usage

After starting the project, open the local development URL provided by the development server in your browser.

The main user flow includes:

1. Browse the product catalog.
2. Search, filter, or sort available products.
3. Open a product to view its detailed information.
4. Add products to favorites or to the shopping cart.
5. Manage products and quantities in the cart.
6. Continue browsing the catalog or return to previously saved products.

## Technologies Used

- **React** — for building the user interface and reusable components.
- **TypeScript** — for static typing and improved development experience.
- **Vite** — for fast development and optimized production builds.
- **React Router** — for application routing and navigation.
- **React Context** API — for centralized state management and sharing application data between components, such as shopping cart and favorites state, without passing props through multiple component levels.
- **CSS / SCSS** — for styling and responsive layouts.
- **JavaScript / TypeScript** — for application logic and interactive functionality.
- **ESLint** — for maintaining code quality and consistent coding practices.
- **Prettier** — for consistent code formatting.
- **Git** — for version control.
- **GitHub** — for repository hosting and collaboration.

## Application Structure

The application is organized around reusable components and pages to make the project easier to maintain and extend.

Typical sections include:

- **Header / Navigation** — provides access to the main parts of the application.
- **Product Catalog** — displays available gadgets and supports browsing, searching, filtering, and sorting.
- **Product Page** — contains detailed information about a selected product.
- **Favorites** — contains products saved by the user.
- **Shopping Cart** — manages selected products and quantities.
- **Reusable UI Components** — buttons, cards, controls, loaders, and other shared elements.

## Responsive Design

The application is designed to provide a consistent experience across multiple devices.

### Supported Screen Sizes

- **Desktop** — 1280px and larger
- **Tablet** — around 640px and larger
- **Mobile** — 320px and larger

Responsive styles ensure that product cards, navigation, filters, product information, and shopping cart elements remain easy to use on smaller screens.

## Project Goals

The main goals of the project are to practice and demonstrate:

- React component architecture
- TypeScript development
- Routing and navigation
- E-commerce functionality
- State management
- Responsive web design
- Reusable UI components
- Working with product data
- Form and user interaction handling
- Modern frontend development practices

## License

This project was created for educational and demonstration purposes.
