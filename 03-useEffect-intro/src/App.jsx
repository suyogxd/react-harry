import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)
  const [first, setFirst] = useState(0)
  const [color, setColor] = useState(0)

  // case 1: run on every render
  useEffect(() => {
    alert("I will run on every render")
  })

  useEffect(() => {
    alert('count was changed.')
    setColor(color+1)
  }, [count])
  

  // Case 2 : run only on first render
  useEffect(() => {
    alert('I will run only on first render')
  }, [])
  
  // Case 2 : I will run only when certain values change
  useEffect(() => {
    alert('I will run only when color is changed.')
  }, [color])
  return (
    <>
    <Navbar color={"navy " + "blue" + color}/>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
