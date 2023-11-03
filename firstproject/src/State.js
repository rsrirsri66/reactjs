import React from "react";
export class Action extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state=
        {
            message:"Imarticus Learning"
        }
    };

    styles={
        fontStyle:"italic",
        color:"purple"
    };

    Buttonchange=()=>{
        this.setState({
            message:"Thank you for subscribing"
        })

    }
    render()
    {
        return(
            <>
            <div className="App"></div> 
            <h3 style={this.styles}>{this.state.message}</h3>
            <button onClick={this.Buttonchange}>Subscribe</button>
            </>
        )
    }
}