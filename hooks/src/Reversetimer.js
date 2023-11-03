import { useState, useEffect } from "react";

function Rtimer(){
    const[count, setCount]=useState(6);
    useEffect(()=>{
    count>0 && setTimeout(()=> setCount(count-1),1000);

},[count]);const handlClick = () => {
    // Start the countdown when the button is clicked
    if (count == 0) {
      setCount(6); // Reset the count if it reaches 0
    }
  };

return (
<div>
<h1>I have rendered {count}times!</h1>
<button onClick={handlClick}>click</button>
</div>
 )
}
export default Rtimer;