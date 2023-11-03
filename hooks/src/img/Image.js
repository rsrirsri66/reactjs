import image from "./logo.png"
function Image1(){
    return(
        <div style={{backgroundImage: `url(${image})`,backgroundRepeat:"no-repeat",backgroundSize:"contain",
         height:600,width:600}}>
            hello world
        </div>
    )
}
export default Image1;