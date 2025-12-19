import React, { useState } from 'react'
import useInput from '../../Hooks/useInput'

export default function Form() {
    
    const firstNameProps = useInput("shamiul")
    const lastNameProps = useInput("islam")

   

    
  return (
    <div>
      <input type="text" value={firstNameProps} onChange={firstNameProps.handleChange}/>
      <br />
      <br />
      <input type="text" value={lastNameProps} onChange={lastNameProps.handleChange} />
      <div>
        <h1>Good Morning : {firstNameProps.value} {lastNameProps.value}</h1>
      </div>
    </div>
  )
}
