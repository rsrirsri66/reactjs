import React from "react";
class MyComponent extends React.Component{
    constructor(props){
        super(props);
        this.callRef=React.createRef();
        this.addingRefInput=this.addingRefInput.bind(this);
    }
    addingRefInput(){
        this.callRef.current.focus();
    }
    render(){
        return(
            <div>
                <h2>Adding Ref to DOM</h2>
                <hr/>
                <input type="text" ref={this.callRef}/>
                <input type="button" value={"add text input"}
                onClick={this.addingRefInput}/>
            </div>
        )
    }
}
export default MyComponent