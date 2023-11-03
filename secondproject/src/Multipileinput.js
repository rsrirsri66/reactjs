import React from "react";

class MultipleInput extends React.Component{
    constructor(props){
        super(props)
        this.state={
            personGoing:true,
            numberOfPersons:5
        }
        this.handleInputChange=this.handleInputChange.bind(this);

}
handleInputChange(event)  {
    const target=event.target;
    const value=target.type==='Checkbox'? target.checked:target.value
    const name=target.name;
    this.setState({
        [name]: value
    })
} 
render(){
    return(
        <form>
            <h1>Multiple input controlled form xm</h1>
            <label>
                Is person going:
                <input name="personGoing" type="checkbox" 
                checked={this.state.personGoing}
                onChange={this.handleInputChange}/>

            </label><br></br>
            <label>
               Num of persons:
                <input name="numberOfpersons" type="number" 
                value={this.state.numberOfPersons}
                onChange={this.handleInputChange}/>

            </label><br></br>
        </form>
    )
} 
}
export default MultipleInput