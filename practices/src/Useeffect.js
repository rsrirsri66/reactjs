import React, { useState, useEffect } from 'react';

function ExampleComponent() {
  const[time,settime]= useState(new Date())


useEffect(()=>{
    const intervelid = setInterval(()=>{
        settime(new Date());
    },1000)//1sec

    return()=> clearInterval(intervelid)
},[]) //[] - this effect is used only once

return(
    <div>
        <h1>Clock</h1>
        <p>{time.toLocaleTimeString()}</p>
    </div>
)
}
export default ExampleComponent;
