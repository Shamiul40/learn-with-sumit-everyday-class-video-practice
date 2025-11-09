import React, { useState } from 'react'
import {sculptureList} from "./data"

export default function ReactState() {
    const [index, setIndex] = useState(0)

    const handleClick =()=>{
        setIndex(index+1)
      
    }

    let sculpture = sculptureList[index]

  return (
    <div>
      <button onClick={handleClick}>next</button>
        <div>
            <h1>{sculpture.name}</h1>
            <p>{sculpture.description}</p>
            <img src={sculpture.url} alt={sculpture.alt} />
        </div>
    </div>
  )
}
