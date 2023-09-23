import { useEffect, useState } from 'react'
import './App.css'

import Div from './Div.jsx'
import Context from './components/Context/index.jsx'
import Login from './components/Login/index.jsx'



function App() {

    const [currentDate, setCurrentDate] = useState(new Date().getDate())
    const [iter, setIter] = useState(0)
    const [user, setUser] = useState({ token: null })

    useEffect(() => {
        // check if token exists in local storage
        const token = localStorage.getItem("token")
        if (token) {
            setUser({ ...user, token })
        }
    }, [])

    console.log("App rendered");

  return (
      <Context.Provider value={{ iter, setIter, currentDate, setCurrentDate, user, setUser }}>
        {
            user.token ? <Div /> : <Login />
        }
      </Context.Provider>
  )
}

export default App
