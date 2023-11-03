
import React, { useEffect, useState } from "react";

function Counter(){
    const[count,setCount]=useState(0);
    const[calculation,setcalculation]=useState(0);

    useEffect(()=>{
        setcalculation(()=>count*2)

    },[count]) //add the count variable here
 return(
    <>
    <p>
        Count: {count}
    </p>
    <button onClick={()=>setCount((c)=>c+1)}>+</button>
    <p>calculation:{calculation}</p>
    </>
 )
}
export default Counter;