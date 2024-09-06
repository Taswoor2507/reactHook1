import React from 'react'
import { useState } from 'react'

const App = () => {
  console.log("app function called ")
  let [num , setValue]  = useState(0)  // [0, f]
   
  function handleIncrement(){
    setValue(num+1) 
  }

  return (
   <>
     <h1>{num}</h1>
     <button onClick={handleIncrement}>Increment</button>
      {/* <span>{num}</span> */}
     <button onClick={()=>{ setValue(num-1)}}>Decrement</button>   
   </>

  )
}

export default App