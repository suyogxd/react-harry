import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { v4 as uuidv4 } from 'uuid';
import { useEffect } from 'react';

function App() {

  const [todo, setTodo] = useState("") // input text which we type on input box.
  const [todos, setTodos] = useState([]) // array that holds our all todos
  const [showFinished, setShowFinished] = useState(true)

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos"))
    if(storedTodos && storedTodos.length > 0){ // if localStorage is not null.
      setTodos(storedTodos)
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos]);

  const handleAdd = () => {
    if(!todo) return // if no todo but clicked add button, todo will not add.//
    setTodos([{id:uuidv4(), todo, isCompleted: false} ,...todos])
    setTodo("")
  }
  const handleEdit = (e, id) => {
    // let todoToEdit = todos.filter((item) => item.id === id)
    // console.log(todoToEdit)
    // setTodo(todoToEdit[0]) // filter le always array return garxa id match always eutai hunxa so array ma object ni euta matra hunewala xa so always the todoToEdit[0] will contain our required todo object to edit.
    // console.log(todoToEdit[0])

    /* If you get confuse on todoToEdit[0], find returns an object which will be a todo object.*/
    
    let todoToEdit = todos.find((item) => item.id === id)
    setTodo(todoToEdit.todo)
    console.log(todoToEdit) //todoToEdit is a todo object with {id,todo,isCompleted}.
  
    /* basically creating an illusion of updating the todo but we are simply
    deleting the old todo(using same as handleDelete) and replacing it with
    new updated todo.  */

    let newTodos = todos.filter((item) => item.id !== id)
    setTodos(newTodos)
  
  }
  const handleDelete = (e, id) => {
    let newTodos = todos.filter((item) => item.id !== id)
    setTodos(newTodos)
  } 
  const handleChange = (e) => {
    setTodo(e.target.value)
  } 

  const handleCheckbox = (e) => {
    let id = e.target.name
    let index = todos.findIndex((item) => item.id === id)
    let newTodos = [...todos]
    newTodos[index].isCompleted = !newTodos[index].isCompleted
    setTodos(newTodos)
  }

  const toggleFinished = (e) => {
    setShowFinished(!showFinished)
  }

  return (
    <>
      <Navbar />
      <div className="container mx-auto my-5 rounded-xl
      px-5 py-3 bg-slate-500 min-h-[85vh]">
          <div className="addTodo">
            <h2 className="text-lg font-bold">
              Add a Todo
            </h2>
            <input type="text" className='rounded-lg py-1 text-black
            w-[70.2vw] border px-2 mb-5'
            placeholder='enter todo...'
            onChange={handleChange}
            value={todo}
            />
            <button className='ml-2 bg-slate-700 hover:bg-slate-600 
            px-3 py-1 rounded-md'
            onClick={handleAdd}
            >
              Add
            </button>
          </div>
          <input type="checkbox" name="showFinished" className='mb-5'
          checked={showFinished} 
          onChange={toggleFinished}
          /><label className='flex-column ml-2 item-center font-bold'>Show Finished Todos</label>
          <h2 className="text-lg font-bold">Your Todos: </h2>
          <div className="todos">
            {todos.map((item) => {
              return (showFinished || !item.isCompleted) && (
                <div key={item.id} className="todo flex items-center mb-3 p-2 border 
                 rounded-lg bg-white/10 backdrop-blur-lg justify-between">
                  <div className='flex gap-5'>
                    <input name={item.id} onChange={handleCheckbox} type="checkbox" 
                    checked={item.isCompleted}/>
                    <div className= {item.isCompleted ? "line-through" : ""}>
                      {item.todo}
                    </div>
                  </div>
                  <div className="buttons">
                    <button className='mx-1 bg-green-900 hover:bg-green-800 
                    px-3 rounded-md ml-27.5'
                    onClick={(e) => {handleEdit(e, item.id)}}
                    >
                      Edit
                    </button>
                    <button className='mx-1 bg-red-900 hover:bg-red-800 
                    px-3 rounded-md'
                    onClick={(e) => {handleDelete(e, item.id)}}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
      </div>
    </>
  )
}

export default App
