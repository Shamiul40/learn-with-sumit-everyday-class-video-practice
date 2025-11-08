// function AlertButton({ message, children }) {
    
//   return (
//     <button onClick={() => alert(message)}>
//       {children}
//     </button>
//   );
// }

// export default function Toolbar() {
//   return (
//     <div>
//       <AlertButton message="Playing!">
//         Play Movie
//       </AlertButton>
//       <AlertButton message="Uploading!">
//         Upload Image
//       </AlertButton>
//     </div>
//   );
// }


import React from 'react'

const AlertButton = ({msg, children}) =>{


  return (
    <button onClick={()=>console.log(msg)}>{children}</button>
  )
}


export default function RespondingToEventsHandler() {
  return (
    <div>
      <AlertButton msg={"watching movie"} >
        watch movie
      </AlertButton>
    </div>
  )
}
