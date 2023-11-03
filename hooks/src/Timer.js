import { useState,useEffect } from "react";

function Timer(){
    const [count, setCount]=useState(0);

    useEffect(()=>{
        count<5 && setTimeout(()=> setCount(count+1),1000)
    },[count])

    return (
        <div>
    <h1>I have rendered {count} times!</h1>
    </div>
    )
}
export default Timer;