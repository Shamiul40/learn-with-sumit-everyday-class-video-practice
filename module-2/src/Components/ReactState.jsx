// import React, { useState } from "react";
// import { sculptureList } from "./data";

// export default function ReactState() {
//   const [index, setIndex] = useState(0);
//   const [showMore, setShowMore] = useState(true);

//   const handleClick = () => {
//     setIndex(index + 1);
//   };

//   const handleShowMore =()=>{
//     setShowMore(!showMore)
//   }

//   let sculpture = sculptureList[index];

//   return (
//     <div>
//       <button
//         className="bg-gray-700 text-white px-4 py-2 mx-4 rounded-lg"
//         onClick={handleClick}
//       >
//         next
//       </button>
//       <button onClick={handleShowMore} className="bg-gray-700 text-white px-4 py-2  rounded-lg">
//         {showMore ? "hide" : "show"} Details
//       </button>
//       <div>
//         <h1>{sculpture.name}</h1>
//         {showMore && <p>{sculpture.description}</p>}
//         <img src={sculpture.url} alt={sculpture.alt} />
//       </div>
//     </div>
//   );
// }





// import { useState } from "react";

// export default function Counter() {
//   const [number, setNumber] = useState(0);

//   return (
//     <>
//       <h1>{number}</h1>
//       <button
//         onClick={() => {
//           setNumber(number + 1);
//           setNumber(number + 1);
//           setNumber(number + 1);
//         }}
//       >
//         +3
//       </button>
//     </>
//   );
// }






// import { useState } from 'react';

// export default function Counter() {
//   const [number, setNumber] = useState(0);

//   return (
//     <>
//       <h1>{number}</h1>
//       <button onClick={() => {
//         setNumber(number + 5);
//         alert(number);
//       }}>+5</button>
//     </>
//   )
// }



// import { useState } from 'react';

// export default function Counter() {
//   const [number, setNumber] = useState(0);

//   return (
//     <>
//       <h1>{number}</h1>
//       <button onClick={() => {
//         setNumber(number + 5);
//         setTimeout(() => {
//           alert(number);
//         }, 3000);
//       }}>+5</button>
//     </>
//   )}




import { useState } from 'react';

export default function Form() {
  const [to, setTo] = useState('Alice');
  const [message, setMessage] = useState('Hello');

  function handleSubmit(e) {
    e.preventDefault();
    setTimeout(() => {
      alert(`You said ${message} to ${to}`);
    }, 5000);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        To:{' '}
        <select
          value={to}
          onChange={e => setTo(e.target.value)}>
          <option value="Alice">Alice</option>
          <option value="Bob">Bob</option>
        </select>
      </label>
      <textarea
        placeholder="Message"
        value={message}
        onChange={e => setMessage(e.target.value)}
      />
      <button type="submit">Send</button>
    </form>
  );
}
