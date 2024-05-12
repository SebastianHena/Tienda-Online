//import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './layout/App.jsx'
import { StrictMode } from 'react'
//Style
import "./css/index.css"


ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <StrictMode>
      <App />
    </StrictMode>
  </>
)
