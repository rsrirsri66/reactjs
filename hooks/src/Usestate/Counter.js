import {useEffect, useState} from "react";

export default function Counter1()
{
    const[counter, setcounter]=useState(0);
    //inc the count by one
    const handleIncreaseCounter=()=>{
        setcounter(counter+1);
    };
    useEffect(()=>{
        console.log("counter changed to:",counter);
    },[counter])

    return(
        <div>
            <h1>Learn about useRef</h1>
            <h2>Value: {counter}</h2>
            <button onClick={handleIncreaseCounter}>
                Increase counter
            </button>
        </div>
    );
}