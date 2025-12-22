import React, { useState } from 'react'
import useInput from '../../Hooks/useInput'

export default function Form() {
    
    const firstNameProps = useInput("")
    const lastNameProps = useInput("")

   

    
  return (
    <div>
      <input type="text" {...firstNameProps}/>
      
    </div>
  )
}
