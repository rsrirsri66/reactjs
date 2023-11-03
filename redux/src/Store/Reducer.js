const initialState ={
    message: "Subscribe to Imarticus"
}

const reducer=(state = initialState, action)=> {
    const newState={...state}; //...state= state tree= state management
    if(action.type === "Message_change")
    newState.message= "Thankyou for subscribing"
return newState;
}
export default reducer;