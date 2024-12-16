import React, { useState } from "react";
import catImage from './photo_2024-07-04_01-38-23.jpg'


function ImageManipulation() {
    const [count,setCount]=useState(50);
    const [red,setRed]=useState(255)
    const [green,setGreen]=useState(255)
    const [blue,setBlue]=useState(255)

    const inc=()=>{
        setCount(count+10);
    }
    const dec=()=>{
        setCount(count-10);
    }

    const changeColor=()=>{
        setRed(Math.floor(Math.random()*256))
        setGreen(Math.floor(Math.random()*256))
        setBlue(Math.floor(Math.random()*256))
    }
  return(
    <>
      <div style={{height:"500px",width:"500px",backgroundColor:`RGB(${red},${green},${blue})`}}>
        <div>

            <img src={catImage} height={count} width={count}/>
        </div>
        
    </div>

        <button onClick={inc}>increment</button>
        <button onClick={dec}>decrement</button>
        <button onClick={changeColor}>change color</button>
    </>
  );
}

export default ImageManipulation;
