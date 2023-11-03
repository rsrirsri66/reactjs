import React from 'react';

class Header extends React.Component{
    constructor(props){
        super(props); //Props doesnt work because the parameter is not passed.
        this.state={favouritecolor:"red"};
    }
    static getDerivedStateFromProps(props, state){
        return{favouritecolor: props.favcol}
    }
    render(){
        return(
            <h1>MY Favourite color is {this.state.favouritecolor}</h1>
        )
    }
}
export default Header;