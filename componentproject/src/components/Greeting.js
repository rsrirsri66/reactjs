import React from "react";
import '../App.css';
class Greeting extends React.Component{
    state={   //state means holding or having data
        name:"hello world"
    }
    render(){
        return(
            <div >
                <h1>{this.state.name}</h1>
            </div>
        )
    }
}
export default Greeting;