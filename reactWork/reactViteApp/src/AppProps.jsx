import React from "react";
import Child from "./Child";

function AppProps() {
    const data={
        name: "John Doe",
        age: 30,
        city: "New York"
    }
    return (
        <div>
            App Props
            <div>
                <Child data={data}/>
            </div>
        </div>
    )
}

export default AppProps;
