import { useEffect, useRef } from "react";

function Useref(){
    //create ref
    const divelement =  useRef();
    //trigger on the first render of the component
    useEffect(()=>{
        // get the height of the div element
        console.log(
            "the height of the div is : ", divelement.current.offsetHeight
        )
    },[])

    return(
        <div ref={divelement}>
            <br/><br/><br/>
            <h1>learn about useRef!</h1>
        </div>
    )

}

export default Useref;