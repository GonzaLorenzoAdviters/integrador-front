import './App.css'
import Login from './components/Login/Login'
import Layout from './Layout/Layout'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import UserListPage from './pages/UserListPage'
import CreateUser from './components/CreateUser/CreateUser'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Login/>}/>
          <Route path="users" element={<UserListPage/>}/>
          <Route path="createUser" element={<CreateUser/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
