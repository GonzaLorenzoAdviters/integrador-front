import { useEffect, useState } from "react"
import User from "../components/User/User"
import { getData } from "../utils/getData"
import { useNavigate } from "react-router-dom"

const UserListPage = () =>
{
    let [users, setUsers] = useState([])

    useEffect(() =>
    {
      getUsers()
    },[])

    const getUsers = async () =>
    {
      setUsers(await getData("http://localhost:3005/users"))
    }

    const handleClick = (e, ) =>
    {
      e.preventDefault()
      useNavigate("/createUser")
      console.log("hola")
    }

    return (
        <div>
          <div>Users</div>
          <div style={{ display: "flex", flexFlow: "column wrap", justifyContent:"space-between"}}>
    
            {users.map((user) => (
              <User
                key = {user.id}
                id = {user.id}
                email = {user.email} />
            ))}
          </div>
          <div style={{ display: "flex", flexFlow: "column wrap", justifyContent:"space-between"}}>
            <button onClick={handleClick}>Crear Usuario</button>
            <button>Modificar Usuario</button>
            <button>Borrar Usuario</button>
          </div>
        </div>
      )
}

export default UserListPage;