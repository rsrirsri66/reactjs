import React,{Component} from "react";
class Property extends Component{
    render(){
        return(
            <div>
                <h1>hi</h1>
                <h3>welcome to {this.props.name}</h3>
            </div>
        )
    }
}
Property.defaultProps={
    name:"Imarticus"
}
export default Property;