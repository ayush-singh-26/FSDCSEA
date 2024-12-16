import React, { useState } from "react";

function StudentState() {

    const [count, setCount] = useState(100)
    const increment=()=>{
      setCount(count+4)
    }
    const decrement =()=>{
      setCount(count-10)
    }

    return (
    <>

        <h1>{count}</h1>
        
        <div>
          <button onClick={increment}>DoIncrement</button>
          <button onClick={decrement}>DoIncrement</button>
        </div>
    </>
  )
}

export default StudentState;
