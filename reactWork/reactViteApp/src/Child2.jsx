import React from "react";

function Child2({data}) {
  return(
    <div>
        <h1>Name: {data.name}</h1>
        <h1>age: {data.age}</h1>
        <h1>City: {data.city}</h1>
    </div>
  );
}

export default Child2;
