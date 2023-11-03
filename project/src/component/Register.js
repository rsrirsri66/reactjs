import React from "react";
class Register extends React.Component{
    render(){
        return(
            <div className="App-header">
                <form>
                    <label>Firstname:</label>
                    <input type="text" name="firstname"/><br></br>
                    <label>Lasttname:</label>
                    <input type="text" name="lastname"/><br></br>
                    <label>Email:</label>
                    <input type="email" name="password"/><br></br>
                    <label>NewPassword:</label>
                    <input type="password" name="password"/><br></br>
                    <label>ComfirmPassword:</label>
                    <input type="password" name="password"/><br></br>
                </form>
            </div>
        )
    }
}
export default Register