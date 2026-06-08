import React from 'react'
import { TableRow, TableCell, IconButton, Tooltip } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';

const User = ({ user, delUser }) => {
  return (
    <TableRow hover>
      <TableCell sx={{ fontFamily: 'monospace' }} Link to={"/users/" + user.id+"?react=899"} >{user._id}</TableCell>
      <TableCell sx={{ fontWeight: 'medium' }}>{user.name}</TableCell>
      <TableCell align="right">
        <Tooltip title="Eliminar usuario">
          <IconButton 
            color="error" 
            onClick={() => delUser(user._id)}
            size="small"
          >
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      </TableCell>
    </TableRow>
  )
}

export default User