import React from "react";
class Ticketreservation extends React.Component{

    render(){
        return(
            <div className="App-header">
                <h1>Travel reservation form</h1>
                <form>
                    <label>Firstname:</label>
                    <input type="text" name="firstname"/><br></br>
                    <label>Middlename:</label>
                    <input type="text" name="midname"/><br></br>
                    <label>Lastname:</label>
                    <input type="text" name="lastname"/><br></br>
                    <label>Email id:</label>
                    <input type="email" name="firstname"/><br></br>
                    <label>Contact No:</label>
                    <input type="number" name="firstname"/><br></br>
                    <label >Gender:</label>
                    <input type="radio" name="gender" value="Male" />Male
                    <input type="radio" name="gender" value="Female"/>Female
                    <input type="radio" name="gender" value="others"/>others
                </form>
                </div>
)
    }
}
export default Ticketreservation;