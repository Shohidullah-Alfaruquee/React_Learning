import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Learn from './components/Learn'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Learn />
    <Learn />
    <Learn />
    <Learn />
    </>
  )
}

export default App
