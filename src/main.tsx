
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Use a faster detection method for root element
const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element not found");
}

// Use concurrent mode for better performance
createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
