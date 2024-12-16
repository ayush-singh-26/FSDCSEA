import React from "react";
import Child2 from "./Child2";

function Child1({data}) {
  return <Child2 data={data}/>;
}

export default Child1;
