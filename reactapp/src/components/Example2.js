import React, { useState } from "react";

function Example2(){
    const [name,name1]=useState("sri");
    return(
        <div>
            <h1>{name}</h1>
            <button onClick={()=>name1("shiva")}>change</button><br></br>
            <button onClick={()=>name1("sharoo")}>change</button>
        </div>
    )
}
export default Example2;