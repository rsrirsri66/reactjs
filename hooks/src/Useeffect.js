import React, { useEffect, useState } from "react";

function Timerr(){
    const[count,setCount]=useState(0);
    useEffect(()=>{
       count<5 && setTimeout(()=>{
            setCount(count+1)
        },1000)
    })
    return(
        <>
        <h1>useEffect Example</h1>
        <h2>I have rendered {count}</h2>
        </>
    )
}
export default Timerr;