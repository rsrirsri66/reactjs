function Example(){
    const isLoggedIn=false;
    return(
        <div>
            {
                10>5 && alert('Correct')
            }
            Welcome{isLoggedIn?'back':'Please Login first'}
        </div>
    )
}
export default Example;