import React from 'react'
import './Card.css'

const Card = (props) => {
  return (
    <div className='cardStyle' style={{overflow:"hidden"}}>
        <img src="data:image/jpeg;base64,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" alt="" height="300px" width="300px
        " style={{border: "2px solid black"}} />
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </div>
  )
}

export default Card