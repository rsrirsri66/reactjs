import React from "react";
//not unmount its container
class Container extends React.Component{
    constructor(props){
        super(props);
        this.state={show:true};
    }
    delHeader=()=>{
        this.setState({show:false});
    }
    render(){
        let myheader;
        if(this.state.show){
            myheader=<Child/>
        }
        return(
            <div>
                {myheader}
                <button type="button" onClick={this.delHeader}>delHeader</button>
            </div>
        )
    }
}
class Child extends React.Component{
    componentWillUnmount(){
        alert("the component named header is about to be unmounted")
    }
    render(){
        return(
            <h1>Hello World!</h1>
        )
    }
}
export{Container, Child};