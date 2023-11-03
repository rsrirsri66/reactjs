import React from "react";
class Login extends React.Component{
    render(){
        return(
            <div className="App-header">
                UserName: <input type="text" name="text"/><br></br>
                Password: <input type="password" name="pass"/><br></br>
                <button>Sign in</button>
            </div>
        )
    }
}
export default Login