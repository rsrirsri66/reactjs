export const Student=(props)=>{
    console.log(props);
    return(
        <div>
            <p>firstName:{props.firstname}</p>
            <p>lastName:{props.lastname}</p>
            <p>Email:{props.email}</p>
           
        </div>
    )
}