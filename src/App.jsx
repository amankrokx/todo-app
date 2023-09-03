import { useState } from 'react'
import './App.css'

import Context from './components/Context/index.jsx'
import Div from './Div.jsx'



function App() {

    const [currentDate, setCurrentDate] = useState(new Date().getDate())
    const [iter, setIter] = useState(0)

    console.log("App rendered");

  return (
      <Context.Provider value={{ iter, setIter, currentDate, setCurrentDate }}>
          <Div />
      </Context.Provider>
  )
}

export default App
