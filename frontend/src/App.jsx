import { useState } from 'react'
import Signup from './pages/Signup'
import Login from "./pages/Login"
import "./pages/styles.css";
import NavBar from './components/NavBar';
import { Routes } from 'react-router-dom';
import MyRoutes from './components/MyRoutes';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <MyRoutes />

    </>
  )
}

export default App
