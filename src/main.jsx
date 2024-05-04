//import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.jsx'
import { StrictMode } from 'react'
//Router
import { BrowserRouter, Routes, Route } from "react-router-dom";
//Pages
import { BodyProduct } from './pages/BodyProduct.jsx';
import { Home } from './pages/Home.jsx';
import { Blog } from './pages/Blog.jsx'
import { Contact } from './pages/Contact.jsx'
//Style
import "./css/index.css"

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <StrictMode>
      <App />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<BodyProduct />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </StrictMode>
  </>
)
