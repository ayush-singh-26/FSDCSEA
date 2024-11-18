import React, { useState } from "react";

function StudentState() {

    const [count, setCount] = useState(100)
    return (
    <>

        <h1>{count}</h1>
    </>
  )
}

export default StudentState;
