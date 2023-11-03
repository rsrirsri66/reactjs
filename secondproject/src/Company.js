import React from "react";

class Company extends React.Component{
    state={
        Name:""
    }
    changeText(event){
        this.setState({
             Name: event.target.value
        })
    }
    render(){
        return(
            <div className="App">
                <h2>Simple Event Ex</h2>
                Enter company name:
                <input type="text" id="companyName"
                onChange={this.changeText.bind(this)}/>
                <h4>you entered:{this.state.Name}</h4>
            </div>
        )
    }
}
export default Company