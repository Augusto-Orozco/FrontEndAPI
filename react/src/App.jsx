import './App.css'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import Profile from './Views/Profile'
import ResponsiveAppBar from './Componentes/AppBar'
import Hola from './Views/Hola'
import Login from './Views/Login'
import { useEffect, useState } from 'react'

const API_URL = "https://api-production-7c6b.up.railway.app/api" 

function AppContent({ login, user, users, delUser, addUser}) {
  const location = useLocation()
  const mostrarbarra = location.pathname !== '/'

  return (
    <>
      {mostrarbarra && <ResponsiveAppBar />}

      <Routes>
        <Route path='/' element={<Login login={login} />} />
        <Route path='/profile' element={<Profile user={user} />} />
        <Route path='/hola' element={<Hola addUser={addUser} users={users} delUser={delUser} />} />
      </Routes>
    </>
  )
}

function App() {
  const [isLogin, setIsLogin] = useState(false)
  const [token, setToken] = useState("")
  const [user, setUser] = useState({})
  const [users, setUsers] = useState([])
  useEffect(() => {
    if (isLogin) {
      const getUsers = async () => {
        const res = await fetch(API_URL + "/users", {headers:{authorization:token}})
        const data = await res.json()
        setUsers(data)
      }
      getUsers()
    }
  }, [isLogin])

  const login = async (userData) => {
    try {
      const res = await fetch(API_URL + "/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(userData)
      })

      const data = await res.json()

      setIsLogin(data.login)
      setUser(data.user)
      setToken(data.token)
      return data
    } catch (error) {
      console.error(error)
      return { login: false }
    }
  }
  const delUser = async (id) => {
    setUsers(users.filter((u) => u._id !== id))
    await fetch(API_URL + "/users/" + id, {headers:{authorization:token}},{
      method: "DELETE"
    })
  }
const addUser = async (newUser) => {
  const res = await fetch(API_URL + "/users", {
    method: "POST",
    headers: {"Content-Type": "application/json", authorization:token},
    body: JSON.stringify(newUser)
  })
  const data = await res.json()
  setUsers([...users, data])
}

  return (
    <BrowserRouter>
      <AppContent login={login} user={user} users={users} delUser={delUser} addUser={addUser} />
    </BrowserRouter> 
  )
}

export default App