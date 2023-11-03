import React from "react";

class Headers extends React.Component{
    constructor(props){
        super(props);
        this.state={favoritecolor: "red"};
    }
    componentDidMount(){
        setTimeout(()=>{
            this.setState({favoritecolor:"sri"})
        },5000)
    }
    render(){
        return(
            <h1>My Fav Color is {this.state.favoritecolor}</h1>
        )
    }
}
export default Headers;