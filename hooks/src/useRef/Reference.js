import React, { useEffect, useRef, useState } from "react";

function Reference(){
    const [inputValue, setinputValue]= useState("");
    const count= useRef(0);

    useEffect(()=>{
        count.current=count.current+1;
    })
 return(
    <>
    <input type="text"
    value={inputValue} onChange={(e)=> setinputValue(e.target.value)}/>
    <h1>Render Count: {count.current}</h1>
    </>
 )

}
export default Reference;