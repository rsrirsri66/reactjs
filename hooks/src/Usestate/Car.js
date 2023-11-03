import {useState} from "react";

function Car1(){
    const [car,setCar] = useState({
        brand:"Ford",
        model:"Mustang",
        Year:"1964",
        color:"red"
    });

    return(
        <>
        <h1>My {car.brand}</h1>
        <p>
            It is a {car.color} {car.model} from {car.Year}

        </p>
        <button onClick={()=>setCar({...car,color:"yeollow",Year:1919})}>Audi</button>
        </>
    )
}
 export default Car1;