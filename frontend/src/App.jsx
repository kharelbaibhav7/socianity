import { useState } from 'react'
import Signup from './pages/Signup'
import Login from "./pages/Login"
import "./pages/styles.css";


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Signup />
      <Login />
    </>
  )
}

export default App
