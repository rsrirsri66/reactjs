import React from "react";
class Login extends React.Component{
    render(){
        const ans=event =>alert(event.target.id)
        return(
        <div className='App'>
            Username: <input type="text" name="text"/><br></br>
            Password: <input type="password" name="pass"/><br></br>
            <button id="Success" onClick={ans}
            >Click Here</button>
        </div>)
    }
}
export default Login;