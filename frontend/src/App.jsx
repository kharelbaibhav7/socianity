import { useState } from 'react'
import Signup from './components/Signup'
import Login from "./components/Login"
import "./components/styles.css";


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
