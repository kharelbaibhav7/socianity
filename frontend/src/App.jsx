import { createContext, useState } from 'react';
import MyRoutes from './components/MyRoutes';
import NavBar from './components/NavBar';
import "./pages/styles.css";



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
