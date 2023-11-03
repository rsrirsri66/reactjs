export const Student1=(props)=>{
    console.log(props);
    return(
        <div className="center">
              <p>firstName:{props.stud.firstname}</p>
            <p>lastName:{props.stud.lastname}</p>
            <p>Email:{props.stud.email}</p>
        </div>
    )
}