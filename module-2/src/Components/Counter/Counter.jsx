import { useRef } from 'react';

export default function Counter() {
    console.log("useRef rendered")
  let ref = useRef(0);

  function handleClick() {
    ref.current = ref.current + 1;
    console.log('You clicked ' + ref.current + ' times!');
  }

  return (
    <button onClick={handleClick}>
      Click me!
    </button>
  );
}



// import { useRef, useState } from 'react';

// export default function Counter() {
// console.log("renderd")
// const [click, setClick] = useState(0)

//     const handleClick =()=>{
//         setClick(click+1)
//         console.log(click)
//     }


//   return (
//     <button onClick={handleClick}>
//       Click me!
//     </button>
//   );
// }
