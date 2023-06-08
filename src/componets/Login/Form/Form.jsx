import { Box, Grid, TextField } from '@mui/material'
import { purple } from '@mui/material/colors'
import React from 'react'

function Form() {
  return (
    <Box component='form'
    sx={{maxWidth: '100vh', backgroundColor: purple[100]}}>
      <Grid item xs={12} md={6} >
          <TextField
        required
        label = 'name'
        variant= 'outlined'
        margin='dense'
        color='secondary'
        >
        </TextField>
      </Grid>
       <Grid item xs={12} md={6} >
           <TextField 
        required
        label = 'Birthday'
        variant= 'outlined'
        margin='dense'
        color='secondary'>
        </TextField>
       </Grid>
       
          <TextField
          required
        label = 'city'
        variant= 'outlined'
        margin='dense'
        color='secondary'>
        </TextField>
          <TextField 
        required
        label = 'address'
        variant= 'outlined'
        margin='dense'
        color='secondary'>
        </TextField>
        <TextField
        required
        label = 'name'
        variant= 'outlined'
        margin='dense'
        color='secondary'>
        
        </TextField>
    </Box>
  )
}

export default Form