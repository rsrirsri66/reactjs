import React from "react";
class Mouse_event extends React.Component
{
    constructor(props)
    {
        super(props)
        {
            this.state={
                message:"Mouse Event"
            }
        }
    }
    handleevent =(event)=>
    {
        if(event.type==="mousedown")
        {
            this.setState({message:"Mouse Down"});
        }
        else if(event.type==="mousemove")
        {
            this.setState({message:"Mouse Move"})
        }
        else{
            this.setState({message:"Mouse Up"})
        }
    }
    render()
    {
        return(
            <div>
              <div className="h4 bg-secondary text-white text-center p-2">
                {this.state.message}

              </div>
              <div className="text-ceenter">
                <button className="btn btn-secondary" onMouseDown={this.handleevent} onMouseUp={this.handleevent}
                onMouseMove={this.handleevent}>
                    Change Image
                </button>

              </div>
            </div>
        )
    }
}
export default Mouse_event