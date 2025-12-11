import { useRef } from 'react';

export default function UseRefLearn() {
 const inputRef = useRef(null)

 const handleClick=()=>{
 
 }
  
  return (
    <>
      <input ref={inputRef} />
      <button onClick={handleClick} >
        Focus the input
      </button>
    </>
  );
}
