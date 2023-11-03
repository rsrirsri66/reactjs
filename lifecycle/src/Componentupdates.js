import React from "react";
class Componen extends React.Component
{
    constructor(props)
    {
        super(props)
        {
            this.state={favouritecolor:"red"}
        }
    }
    componentDidMount()
    {
        setTimeout(()=>
        {
            this.setState({favouritecolor:"YEllow"})
        },5000)
    }
    componentDidUpdate()
    {
        document.getElementById("mydiv").innerHTML="The updated fav color is"+this.state.favouritecolor
    }
    render()
    {
        return(
            <div>
                <h1>My fav color is {this.state.favouritecolor}</h1>
                <div id="mydiv"></div>
            </div>
        )
    }
}export default Componen