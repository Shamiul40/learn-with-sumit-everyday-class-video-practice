import React, { useState } from 'react'

export default function Counter({title}) {
    const [score, setScore] = useState(0)

  return (
    <div>
        <h1>{title}</h1>
      <h1>{score}</h1>
      <button onClick={()=>setScore(score+1)}>Add One</button>
    </div>
  )
}
