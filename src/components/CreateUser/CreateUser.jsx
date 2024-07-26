import { useNavigate } from "react-router-dom"

const CreateUser = () =>
{
    const navigate = useNavigate()

    const handleSubmit = async (event) => {
        event.preventDefault();
    
        const formData = new FormData(event.target);
        const username = formData.get('username');
        const email = formData.get('email');
        const password = formData.get('password');
        const role = formData.get('role')
    
        try {
          const response = await fetch('http://localhost:3005/users', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify({ username, email, password, role }),
          });

          console.log(response);

          if (!response.ok) {
            throw new Error("Datos invalidos");
          }
    
          const data = await response.json();
          console.log(data);

          localStorage.setItem('token', data.token);
    
          navigate("/users");
        } catch (error) {
          console.error(error);
        }
    }

    return(
    <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input type="username" name="username" id="" />
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="" />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id=""/>
        <label htmlFor="role">Role</label>
        <select name="role" id="role">
        <option value="cee22123-813d-4f35-9497-a3b53680ed02">Basic</option>
        <option value="f008dda0-5e41-4c5e-bb73-3f8a440d11ec">Admin</option>
        </select>
        
        <button>submit!</button>
    </form>)
}    

    export default CreateUser;