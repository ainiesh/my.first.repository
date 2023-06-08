import { useState } from 'react'
import {  purple} from '@mui/material/colors'
import { Email, Lock, Visibility, VisibilityOff} from '@mui/icons-material'
import { Button, Card, CardActions, CardContent, CardHeader, Divider, Grid, IconButton, TextField } from '@mui/material'
import './Login.css'

function Login() {
 const[isPassVisible, setIsPassVisible] = useState(false)
 const[email, setEmail] = useState('')
 const[isEmailValid, setIsEmailValid] = useState(true)

  const handleEmailChange = (event) => {
    const inputEmail = event.target.value;
    setEmail(inputEmail);
    setIsEmailValid(validateEmailFormat(inputEmail));
  };
   const validateEmailFormat = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  function handleClick () {
  setIsPassVisible (!isPassVisible)
 }
 
  return (
    <>
      <Card 
      sx={{maxWidth: '800px', backgroundColor: purple [100]}}
      raised={true}> 
      <CardHeader title='Login'> </CardHeader>
      <CardContent>
        <TextField 
        required
        fullWidth label= 'email'
        variant='outlined'
        margin='dense' 
        color='secondary'
        type='email'
        helperText={!isEmailValid ? 'Email incorrect' : ''}
        onChange={handleEmailChange}
        InputProps={{startAdornment : <Email/> }}>
        </TextField>
        <TextField 
        required
        fullWidth
        type={isPassVisible ? 'text' : 'password'}
        label= 'password' 
        variant='outlined'  
        margin='dense' 
        color='secondary' 
        InputProps={{startAdornment : <Lock/>, endAdornment:(<IconButton onClick={(e) => handleClick()}>
           {isPassVisible ? <Visibility/> : <VisibilityOff/>}
        </IconButton> )
        }}>  
        </TextField>
      </CardContent>
      <Divider></Divider>
      <CardActions>
        <Button size='small' color='primary' variant='outlined' >Login</Button>
        <Button size='small' color='secondary' variant='outlined'>SignUp</Button>
      </CardActions>
      </Card>
     
    </>
  )
}


export default Login