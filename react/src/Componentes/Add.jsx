import React, { useState } from "react";
import { Box, TextField, Button, Paper, Typography } from "@mui/material";
import PersonAddIcon from '@mui/icons-material/PersonAdd';

const Add = ({ addUser }) => {
  const [name, setName] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const onsubmit = (e) => {
    e.preventDefault()

    if (!name || !username || !password) {
      alert("Campos vacíos")
      return
    }

    addUser({ name, username, password })

    setName("")
    setUsername("")
    setPassword("")
  }

  return (
    <Paper elevation={2} sx={{ p: 3, mb: 4, borderRadius: 2 }}>
      <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <PersonAddIcon color="primary" /> Agregar Nuevo Usuario
      </Typography>
      <Box 
        component="form" 
        onSubmit={onsubmit} 
        sx={{ 
          display: 'flex', 
          gap: 2, 
          flexWrap: 'wrap',
          alignItems: 'center'
        }}
      >
        <TextField
          size="small"
          label="Nombre"
          value={name}
          onChange={(e) => setName(e.target.value)}
          sx={{ flexGrow: 1, minWidth: '200px' }}
        />
        <TextField
          size="small"
          label="Usuario"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          sx={{ flexGrow: 1, minWidth: '200px' }}
        />
        <TextField
          size="small"
          label="Contraseña"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          sx={{ flexGrow: 1, minWidth: '200px' }}
        />
        <Button 
          type="submit" 
          variant="contained" 
          startIcon={<PersonAddIcon />}
          sx={{ height: '40px' }}
        >
          Agregar
        </Button>
      </Box>
    </Paper>
  )
}

export default Add