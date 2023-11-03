import React from "react";

class Componentupdate extends React.Component{
    constructor(props){
        super(props)
        this.state={favoritecolor:"red"};
    }
    shouldComponentUpdate(){
        return true;
    }
    changeColor=()=>{
        this.setState({favoritecolor:"blue"});
    }
    render(){
        return(
            <div>
                <h1>MY Fav color is {this.state.favoritecolor}</h1>
                <button type="button" onClick={this.changeColor}>changeColor</button>
            </div>
        )
    }
}
export default Componentupdate;