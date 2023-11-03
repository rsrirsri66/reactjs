function Notification({text}){
    switch(text){
        case 'Hi All':
            console.log(text)
            return <input type="text" value={text}/>
            break;
            case 'Hello Imarticus':
                return <input type="text" value={text}/>
                break;
                default:
                    return null;
    }
}
export default Notification;