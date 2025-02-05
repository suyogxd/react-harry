import React from 'react'
import './Card.css'

function Card({title, description}) {
  return (
    <div className="container">
        <div className="card">
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
    </div>
  )
}

export default Card