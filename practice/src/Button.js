import React, { Component } from "react";

class Button extends Component{
    constructor(props){
        super(props)
        this.state={
            count: "Hello world !!!"
        }
    }
    change =()=>{
        this.setState("sri")
    }
    render(){
        return(
            <div>{this.state.count}
            
            </div>

        )
    }
}
export default Button;