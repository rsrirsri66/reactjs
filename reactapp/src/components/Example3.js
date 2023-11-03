import React from "react";

class Example3 extends React.Component{
    state={
        name:"Sri",
        age:22
    }
    handleEvent=()=>{
        this.setState({name:'Fire',age:21})
    }
    render(){ // render is used as browser supportive
        return(
           <div>
            <h1>Welcome to class Component</h1>
            <h2>Name = {this.state.name}</h2>
            <h2>Age = {this.state.age}</h2>
            <button onClick={this.handleEvent}>Click now!</button>
           </div>
        )
    }
}
export default Example3;