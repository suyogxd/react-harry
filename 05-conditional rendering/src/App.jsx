import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [showBtn, setShowBtn] = useState(false)
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
      {/* one way to do  */}
      {showBtn ? <button>showBtn is true.</button> : <button>showBtn is false.</button>}
      {/* another way to do */}
      {/* {showBtn && <button>I will be shown only when second button is clicked.</button>} */}
      <div className="card">
        <button onClick={() => setShowBtn(!showBtn)}>
          showBtn is {showBtn.toString()} // toString() le boolean lai string ma convert garxa so dekhinxa result ma.
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
