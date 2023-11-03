const Checklist=({checkboxes, checkedState, handlecheckboxchange})=>{
    return (
        <div>
            {checkboxes.map((item, index)=>(
                <div key={index}>
                <label>
                    <input
                    type="checkbox"
                    checked={checkedState[index]}
                    onChange={()=> handlecheckboxchange(index)}
                    />
                    {item}
                </label>
                </div>
            ))}
        </div>
    )
}
export default Checklist;