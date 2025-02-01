import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <BrowserRouter>
    <Toaster></Toaster>
    <App />
  </BrowserRouter>
  // </StrictMode>,
)
