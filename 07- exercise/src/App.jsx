/*
  You have to use an api and display the data in the form of
  a card under a container. All the data points returned by 
  the API should be converted to a card Use this API: 
  https://jsonplaceholder.typicode.com/posts

  Hint: Create a state for the data which will be fetched 
  using the Json Placeholder API Inside useEffect, use fetch 
  to populate that state and then use map to render the cards 
  from that state
*/

import { useState, useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar'

function App() {
  const [cards, setCards] = useState([])

  const fetchData = async () => {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts")
    let data = await response.json()
    setCards(data)
    console.log(data)
  }

  useEffect(() => {
    fetchData()
  })

  return (
    <>

      <Navbar />
      <div className="container">
        
          {cards.map((card) => {
            return <div key={card.id} className="card">
              <h1>{card.title}</h1>
              <p>{card.body}</p>
              <span>By UserId: {card.userId}</span>
            </div>
          })}
      </div>
    </>
  )
}

export default App
