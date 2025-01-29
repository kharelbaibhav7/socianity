import { createContext, useState } from 'react'
import Signup from './pages/Signup'
import Login from "./pages/Login"
import "./pages/styles.css";
import NavBar from './components/NavBar';
import { Routes } from 'react-router-dom';
import MyRoutes from './components/MyRoutes';


export let GlobalVariableContext = createContext()


function App() {
  let [token, setToken] = useState(localStorage.getItem("token"))
  const [count, setCount] = useState(0)

  return (
    <>
      <GlobalVariableContext.Provider value={{ token: token, setToken: setToken }}>
        <NavBar />
        <MyRoutes />
      </GlobalVariableContext.Provider>
    </>
  )
}

export default App
