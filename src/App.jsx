import { useState } from 'react'
import './App.css'

import DayPlanner from './components/DayPlanner'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <DayPlanner />
    </>
  )
}

export default App
