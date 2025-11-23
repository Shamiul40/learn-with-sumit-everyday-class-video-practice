
// import './App.css'
// import "./styles.css";



// import Counter from './Components/State Preserve/Counter'
// import { useState } from 'react';



// function App() {
// const [playerA, setPlayerA] =  useState(true)

//   return (
//     <>
    
//     {playerA ? <Counter title="tailors score" /> :   <Counter title = "sarah score" /> }

//      <button onClick={()=>setPlayerA(!playerA)}>next Player</button>
    
//     </>
//   )
// }

// export default App




import './App.css'
import "./styles.css";



import Counter from './Components/State Preserve/Counter'
import { useState } from 'react';



function App() {
const [playerA, setPlayerA] =  useState(true)

  return (
    <>
    
    {/* {playerA ? <Counter title="tailors score" /> :   <Counter title = "sarah score" /> } */}

    {
      playerA &&  <Counter title="tailors score" />
 
    }

    {
      !playerA &&  <Counter title = "sarah score" />   }
     <button onClick={()=>setPlayerA(!playerA)}>next Player</button>
    
    </>
  )
}

export default App
