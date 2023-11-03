import React from "react";

class Employee extends React.Component{

    state={
        firstName:"Sridharan",
        lastname:"Ravichandran",
        email:"rsrirsri66@gmail.com"
    }
    updateEmployee(){
        this.setState({
            lastname:"SriSRi",
            email:"adjdij12@gmail.com"

        })
    }
    render(){
        return(
         <div className="center">
            <h1>Employee Details</h1> <hr />  {/*horizontal ruling*/}
            <p>{this.state.firstName}</p>
            <p>{this.state.lastname}</p>
            <p>{this.state.email}</p>
            <button onClick={( )=>this.updateEmployee()}>
                Update
            </button>


         </div>
        )
    }
}
export default Employee