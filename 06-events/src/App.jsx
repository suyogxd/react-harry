import { useState } from 'react'
import './App.css'

function App() {
  // const [name, setName] = useState("Suyog")
  const [form, setForm] = useState({
    name: "Suyog",
    email: "hello@hello.com"
  })

  const handleClick = () => {
    alert('button is clicked.')
  }

  const handleChange = (e) => {
    // setForm(e.target.value)
    setForm({...form, [e.target.name]: e.target.value})
    console.log(form)
  }
  /*
  1️⃣ setForm(e.target.value) (Incorrect)
  ❌ This approach is incorrect for an object state like form.

    What it does:
    It replaces the entire form state with a single value (e.target.value).
    Since form was originally an object, React will treat it as a string instead, breaking the intended behavior.
  
  🔴 Problem:
    If you type "John" in the name input field, the entire form state will become "John", removing the email field completely.
    The state is no longer an object, so form.email will be undefined, causing errors

  2️⃣ setForm({...form, [e.target.name]: e.target.value}) (Correct)
  ✅ This correctly updates only the changed field while keeping the other fields intact.

    What it does:
    { ...form } → Creates a copy of the existing form state.
    [e.target.name]: e.target.value → Updates only the field (name or email) that triggered the change.
    React merges the new value into the state without deleting other properties.
  */

  return (
    <>
      <div className="button">
        <button onClick={handleClick}>Click me</button>
      </div>   
      <input type="text" name="name" value={form.name} onChange={handleChange}/>   
      <input type="text" name="email" value={form.email} onChange={handleChange}/>   
    </>
  )
}

export default App
