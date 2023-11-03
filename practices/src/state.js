import React from "react";
import { Component } from "react";

class State extends Component{
    constructor(props){
        super(props);
        this.state={
            count :0, 
        }
    }

    IncCount =()=>{
        this.setState({count: this.state.count + 1})
    }

    render(){
        return(
            <div>
                <p>{this.state.count}</p>
                <button onClick={this.IncCount} >Increment</button>
            </div>
        )
    }
}
export default State;