import React, { useState } from "react";
function Sample1(){
    const[name,name1]=useState('Sri');
    return(
        <div>
            <h1>{name}</h1>
            <button type="button" onClick={()=>name1('Shiva')}>
                Name1
            </button>
            <button type="button" onClick={()=>name1('Sharoo')}>
                Name2
            </button>
            <button type="button" onClick={()=>name1('Srii')}>
                Name3
            </button>
        </div>
    )
}
export default Sample1;