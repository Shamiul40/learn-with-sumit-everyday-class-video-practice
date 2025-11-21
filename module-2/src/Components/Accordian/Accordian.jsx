import React, { useState } from 'react'
import ChildAccordian from './ChildAccordian'

export default function Accordian() {
    const [show, setShow] = useState(0)

    const handleShow =()=>{
        setShow(!show)
    }

  return (
    <div>
      <h1>Shamiul Islam Accordian</h1>
      <ChildAccordian show={show} handleShow={handleShow}></ChildAccordian>
      <ChildAccordian show={show} handleShow={handleShow}></ChildAccordian>
    </div>
  )
}
