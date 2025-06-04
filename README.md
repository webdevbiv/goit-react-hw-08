# Contacts App

A phonebook application built with **React**, **Redux Toolkit**, and **Vite**.
Authenticated users can manage their personal list of contacts using an external API.

## Features

- **User Authentication** – register, log in, and log out via the [GoIT Contacts API](https://connections-api.goit.global/).
- **Contact Management** – create, update and remove contacts.
- **Filtering** – search contacts by name in real time.
- **Persistent State** – authentication and contacts are stored using Redux Persist.
- **Responsive UI** – built with Material UI components.

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` in your browser.
3. Create a production build:
   ```bash
   npm run build
   ```
4. Lint the project:
   ```bash
   npm run lint
   ```

## Project Structure

- **src/components** – reusable UI components
- **src/pages** – route-based pages
- **src/redux** – state management logic
- **src/routes** – application routing configuration

The repository includes a `vercel.json` file for deployment to Vercel.
