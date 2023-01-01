import { Google } from "@mui/icons-material"
import { Button, Grid, Link, TextField, Typography } from "@mui/material"
import {Link as RouterLink} from "react-router-dom"
import { AuthLayout } from "../layout/AuthLayout"



export const RegisterPage = () => {
  return (

    <>
    <AuthLayout title="Crear cuenta">
    
      
    <form>
      <Grid container>
        <Grid item xs ={12} sx={{mt:2}}>
          <TextField  label="Nombre de usuario" type="text" placeholder="Introduce tu nombre de usuario" fullWidth/>
        </Grid>
        
        <Grid item xs ={12} sx={{mt:2}}>
          <TextField  label="Correo electrónico" type="email" placeholder="Introduce tu correo" fullWidth/>
        </Grid>
        <Grid item xs ={12} sx={{mt:2}}>
          <TextField  label="Confirma correo electrónico" type="email" placeholder="Por favor , confirma tu correo" fullWidth/>
        </Grid>
        <Grid item xs ={12} sx={{mt:2}}>
          <TextField  label="Contraseña" type="password" placeholder="Introduce tu contraseña" fullWidth/>
        </Grid>
        <Grid item xs ={12} sx={{mt:2}}>
          <TextField  label="Confirma contraseña" type="password" placeholder="Por favor, confirma tu contraseña" fullWidth/>
        </Grid>
        <Grid item xs={12} sm={12}>
          <Button sx ={{mt:2, mb:1}}variant="text" fullWidth>Crear cuenta</Button>
        </Grid>

        <Grid container
        direction="row"
        justifyContent="end">
          ¿Ya estás registrado?
          <Link  sx ={{ml:1, mr:2}}component={RouterLink} color="inherit" to="/auth/login">Ingresar</Link>
        </Grid>
      </Grid>

    </form>

    </AuthLayout>

    </>


  )
}
