import React, { useState } from 'react'
import useInput from '../../Hooks/useInput'

export default function Form() {
    
    const firstNameProps = useInput("")
    const lastNameProps = useInput("")

   

    
  return (
    <div>
      <input type="text" {...firstNameProps}/>
      <br />
      <br />
      <input type="text" {...lastNameProps} />
      <div>
        
      </div>
    </div>
  )
}
