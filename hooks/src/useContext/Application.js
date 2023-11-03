export function Application(){
    const username="Sri Sri";
    return(
        <Layout username={username}>
          Main content
        </Layout>
    )
}

function Layout ({children, username}){
    return(
        <div>
            <Header username={username}/>
            <main>
                {children}
            </main>
        </div>
    )
}

function Header({username}){
    return (
        <header>
            <UserInfo username={username}/>
        </header>
    )
}
function UserInfo({username}){
    return <span>{username}</span>;
}