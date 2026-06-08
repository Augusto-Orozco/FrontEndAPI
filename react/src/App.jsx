import './App.css'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import Profile from './Views/Profile'
import ResponsiveAppBar from './Componentes/AppBar'
import Hola from './Views/Hola'
import Login from './Views/Login'
import { useEffect, useState } from 'react'
import { Container, Box, Button } from '@mui/material'
import Details from './Componentes/Details'
import useAuth from './hooks/useAuth'
import useAdmin from './hooks/useAdmin'
import LifeCycle from './Componentes/LifeCycle'

function AppContent({ login, logout, user, users, delUser, addUser}) {
  const location = useLocation()
  const mostrarbarra = location.pathname !== '/'

  return (
    <>
      {mostrarbarra && <ResponsiveAppBar logout={logout} />}
      <Routes>
        <Route path='/' element={<Login login={login} />} />
        <Route path='/profile' element={<Profile user={user} />} />
        <Route path='/hola' element={<Hola addUser={addUser} users={users} delUser={delUser} />} />
        <Route path='/users/:username' element={<Details users={users}/>}/>
      </Routes>
    </>
  )
}

function App() {
  const [show, setShow] = useState(false)
  const {isLogin, token, user, login, logout} = useAuth()
  const {users, getUsers, delUser, addUser} = useAdmin(token)

  useEffect(() => {
    if (isLogin) {
      getUsers()
    }
  }, [isLogin, getUsers])

  return (
    <>
    <BrowserRouter>
      <AppContent 
        login={login} 
        logout={logout} 
        user={user} 
        users={users} 
        delUser={delUser} 
        addUser={addUser} 
      />
    </BrowserRouter>
    
    <Container sx={{ my: 4, textAlign: 'center' }}>
      <Box sx={{ p: 2, border: '1px dashed grey', borderRadius: 2, display: 'inline-block' }}>
        <Button variant="outlined" onClick={() => setShow(!show)}>
          {show ? "Hide" : "Show"}
        </Button>
        {show && (
          <Box sx={{ mt: 2 }}>
            <LifeCycle />
          </Box>
        )}
      </Box>
    </Container>
    </>
  )
}

export default App