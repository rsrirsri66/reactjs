import React, {Component} from 'react';

class Uncontrolled extends React.Component{
constructor(props){
    super(props)
    this.updateSubmit=this.updateSubmit.bind(this)
    this.input=React.createRef();
}
updateSubmit(event){
    alert("you have entered the username successfully")
    event.preventDefault();
}
render(){
    return(
    <form onSubmit={this.updateSubmit}>
        <h1>Uncontrolled form ex</h1>
        <label>Name:
            <input type="text" ref={this.input}/>
        </label><br></br>
        <label>CompanyName:
            <input type="text" ref={this.input}/>
        </label><br></br>
        <input type="submit" value="Submit"/>
    </form>
)
}

}
export default Uncontrolled