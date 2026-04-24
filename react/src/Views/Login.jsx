import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { 
  TextField, 
  Button, 
  Container, 
  Paper, 
  Typography, 
  Box 
} from '@mui/material'

const Login = ({ login }) => {
  const navigate = useNavigate()
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const onsubmit = async (e) => {
    e.preventDefault()
    if (!username || !password) {
      alert("Credenciales vacias")
      return
    }
    const res = await login({ username: username, password: password })
    if (res.login === true) {
      setUsername("")
      setPassword("")
      navigate("/profile")
    } else {
      alert("Credenciales incorrectas")
    }
  }

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Paper elevation={3} sx={{ p: 4, width: '100%', borderRadius: 2 }}>
          <Typography component="h1" variant="h5" align="center" gutterBottom sx={{ fontWeight: 'bold', color: 'primary.main' }}>
            Bienvenido
          </Typography>
          <Typography variant="body2" align="center" color="textSecondary" sx={{ mb: 3 }}>
            Ingresa tus credenciales para continuar
          </Typography>
          <Box component="form" onSubmit={onsubmit} sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Usuario"
              name="username"
              autoComplete="username"
              autoFocus
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Contraseña"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, py: 1.5, fontWeight: 'bold' }}
            >
              Iniciar Sesión
            </Button>
          </Box>
        </Paper>
      </Box>
    </Container>
  )
}

export default Login
