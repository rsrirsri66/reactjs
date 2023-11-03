function Array(){
    const items=["Sri","Sakthi","Noble","Hari"];
    return(
        <div>
            <ul>
                {items.map((item,i)=>(
                    <li key="{i}">{item}</li>
                ))}
            </ul>
        </div>
    )
}
export default Array