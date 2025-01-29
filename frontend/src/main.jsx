import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Signup from "./components/Signup"
import App from './App'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
