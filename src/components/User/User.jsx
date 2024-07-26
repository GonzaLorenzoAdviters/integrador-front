const User = ({id, email}) =>
{
    return(
        <div style={{border: "solid 2px white"}}>
            <p>{id}</p>
            <p>{email}</p>
        </div>
    )
}

export default User;