import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './layout/App.jsx'
import { StrictMode } from 'react'

//Style
import "./css/index.css"

//Context
import { CartProvider } from './context/CartContext.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
    <StrictMode>
      <CartProvider>
      <App />
      </CartProvider>
    </StrictMode>
);

