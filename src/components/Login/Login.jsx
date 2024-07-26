import { useNavigate } from "react-router-dom"

const Login = () =>
{
    const navigate = useNavigate()

    const handleSubmit = async (event) => {
        event.preventDefault();
    
        const formData = new FormData(event.target);
        const email = formData.get('email');
        const password = formData.get('password');
    
        try {
          const response = await fetch('http://localhost:3005/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
          });

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
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="" />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id=""/>
        <button>submit!</button>
    </form>)
}    

    export default Login;