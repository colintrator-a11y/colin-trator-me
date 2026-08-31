import React from 'react'
import { createRoot } from 'react-dom/client'

// Tokens and base styles first: component stylesheets are bundled in import
// order, and they need to be able to override the shared primitives (a
// component rule and a .btn rule have the same specificity, so order decides).
import './styles/global.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
