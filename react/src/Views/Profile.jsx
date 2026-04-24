import React from 'react'
import { 
  Container, 
  Paper, 
  Typography, 
  Box, 
  Avatar, 
  Divider 
} from '@mui/material'
import foto from '../assets/dinosaurio.png'

const Profile = ({ user }) => {
  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Paper elevation={3} sx={{ p: 4, width: '100%', borderRadius: 4, textAlign: 'center' }}>
          <Avatar
            src={foto}
            sx={{ width: 120, height: 120, mb: 2, mx: 'auto', border: '4px solid', borderColor: 'primary.main' }}
          />
          <Typography component="h1" variant="h4" gutterBottom sx={{ fontWeight: 'bold', color: 'black' }}>
            Mi Perfil
          </Typography>
          <Divider sx={{ my: 2 }} />
          <Box sx={{ textAlign: 'left', mt: 3 }}>
            <Typography variant="subtitle1" color="textSecondary">
              Nombre:
            </Typography>
            <Typography variant="h6" gutterBottom>
              {user.name}
            </Typography>
            
            <Typography variant="subtitle1" color="textSecondary" sx={{ mt: 2 }}>
              ID de Usuario:
            </Typography>
            <Typography variant="body1" sx={{ fontFamily: 'monospace', bgcolor: 'grey.100', p: 1, borderRadius: 1 }}>
              {user._id}
            </Typography>
          </Box>
        </Paper>
      </Box>
    </Container>
  )
}

export default Profile
