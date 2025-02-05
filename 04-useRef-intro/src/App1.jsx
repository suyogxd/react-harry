// userRef ko use case number 1 .

import { useState, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const a = useRef(0) //  if hamile useRef use nagarera 
  // direct let a = 0 ani useEffect ma a = a+1 gareko bhaye
  // rerendering huda a ko value 0 hunthyo ani tala aayera 
  // 1 hunthyo ani feri rerender bhayexi a ko value
  // 0 bhaihalthyo.

  useEffect(() => {
    a.current = a.current + 1
    console.log(`rerendering and value of a is ${a.current}`)
  })
  return (
    <>
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
