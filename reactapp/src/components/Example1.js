//creating Functional component

import { useState } from "react";

function Example1(){
    const[count,setCount]=useState(0);
    function handleEvent(){
        setCount(count+1);
    }
    function double(){
        setCount(count+2);
    }
    return(
        <div>
             <h1>Welcome to functional Component</h1>
             <h2>yoyoyo</h2>
             <h2>count={count}</h2>
             <h3>setCount={count+1}</h3>
             <button onClick={handleEvent}>Single count</button><br></br>
             <button onClick={double}>double count</button>
        </div>
    )
   
}

export default Example1;