import { useState } from "react";
function Car(){
    const[brand,setBrand]=useState("Ford");
    const[model,setModel]=useState("Mustang")
    const[year,setYear]=useState("1964")
    const[color,setColor]=useState("Blue")

    return(
        <>
            <h1>My {brand}</h1>
            <p>
                It is a{color} {model} from {year}         
                   </p>
                   <button onClick={()=>setBrand("Audi")}>Audi</button>
        </>
    )
}
export default Car;