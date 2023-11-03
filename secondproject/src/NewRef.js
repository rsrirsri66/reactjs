import React from "react";
const Textinput=React.forwardRef((props,ref)=>(
    <input type="text" placeholder="Hello World" ref={ref}></input>
))
const inputRef = React.createRef();

class CustomT_Ref extends React.Component{
    handleSubmit=e=>
    {
        e.preventDefault();
        console.log(inputRef.current.value);
    }
    render()
    {
        return(
            <div>
                <form onSubmit={e=>this.handleSubmit(e)}>
                    <Textinput ref={inputRef}></Textinput>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}export default CustomT_Ref