import React, { useState } from 'react'

export default function Form() {
    const [firstName, setFirstName] = useState("shamiul")
    const [LastName, setLastName] = useState("Islam")

    const handleFirstName =(e)=>{
        setFirstName(e.target.value)
    }

    const handleLastName =(e)=>{
        setLastName(e.target.value)
    }

  return (
    <div>
      <input type="text" value={firstName} onChange={handleFirstName}/>
      <br />
      <br />
      <input type="text" value={LastName} onChange={handleLastName} />
      <div>
        <h1>Good Morning : {firstName} {LastName}</h1>
      </div>
    </div>
  )
}
