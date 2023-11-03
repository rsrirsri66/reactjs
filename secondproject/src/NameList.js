import React from "react";

function Namelist(props)
{
    const myList=props.myList;
    const items=myList.map((myList)=>
    {
        return <li>{myList}</li>
    })
    return(
        <div>
            <h2>Rendering lists using props</h2>
            <ul>{items}</ul>
        </div>
    )
}export default Namelist