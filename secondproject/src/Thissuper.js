import React, { Component } from "react"
class Cons extends React.Component{

    constructor(props){
        //this.lname="john"
        super(props);
        this.state={
            fname:"John"
        }
    }
    render(){
        return(
            <div>
                <p>Name:{this.state.fname}</p>
            </div>
        )
    }
}
export default Cons