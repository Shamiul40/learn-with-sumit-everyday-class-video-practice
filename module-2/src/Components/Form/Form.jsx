import React, { useState } from 'react'
import useInput from '../../Hooks/useInput'

export default function Form() {
    
    const firstNameProps = useInput("shamiul")
    const lastNameProps = useInput("islam")

   

    
  return (
    <div>
      <input type="text" {...firstNameProps}/>
      <br />
      <br />
      <input type="text" {...lastNameProps} />
      <div>
        <h1>Good Morning : {firstNameProps.value} {lastNameProps.value}</h1>
      </div>
    </div>
  )
}
