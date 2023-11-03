import React from "react"
function Prop(props){
    return(
        <h2>Hello, {props.name}</h2>
    )
}

function Wel(){
    return(
        <div>
            <Prop name="sri"/>
           {/* <button onClick={name="sridharan"}>CLICK</button> */}
        </div>
    )
}
export default  Wel;