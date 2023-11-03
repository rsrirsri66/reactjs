import React, { Component } from "react";
import Insert1 from "./Insert1";
import Show from './Show';

class Form extends Component{
constructor(props){
    super(props);
    this.state={
        formData: {}
    }
}
submitData = (newData)=>{
    this.setState({formData: newData});
}
render(){
    return<div className="container-fluid">
        <div className="row">
            <div className="col-12">
                <Insert1 submit={this.submitData}/>
            </div>
            <div className="col-12">
                <Show data={this.state.formData}></Show>
            </div>
        </div>
    </div>
}
}
export default Form;