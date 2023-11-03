import React from "react";

class Snapshot extends React.Component{
    constructor(props){
        super(props)
        this.state={favoritecolor:"red"}
    }
    componentDidMount(){
        setTimeout(()=>{
            this.setState({favoritecolor:"yellow"})
        },5000)
    }
    getSnapshotBeforeUpdate(prevProps,prevState){
        document.getElementById("div1").innerHTML="Befor update, the fav was "+prevState.favoritecolor;
    }
    componentDidUpdate(){
        document.getElementById("div2").innerHTML="Updated fav is "+this.state.favoritecolor;
    }
    render(){
        return(
            <div>
                <h1>
                    My fav color is {this.state.favoritecolor}
                </h1>
                <div id="div1"></div>
                <div id="div2"></div>
            </div>
        )
    }
}
export default Snapshot;