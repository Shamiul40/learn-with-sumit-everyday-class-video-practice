import { useRef } from 'react';

export default function Counter() {
    console.log("useRef rendered")
  let ref = useRef(0);


  return (
    <button onClick={handleClick}>
      Click me!
    </button>
  );
}



