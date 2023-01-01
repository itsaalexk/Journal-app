import { Google } from "@mui/icons-material"
import { Button, Grid, Link, TextField, Typography } from "@mui/material"
import {Link as RouterLink} from "react-router-dom"
import { AuthLayout } from "../layout/AuthLayout"



export const LoginPage = () => {
  return (

    <>
    <AuthLayout title="login">
      
    <form>
      <Grid container>
        <Grid item xs ={12} sx={{mt:2}}>
          <TextField  label="Correo" type="email" placeholder="Introduce tu correo" fullWidth/>
        </Grid>
        <Grid item xs ={12} sx={{mt:2}}>
          <TextField  label="Correo" type="email" placeholder="Introduce tu correo" fullWidth/>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Button sx ={{mt:2, mb:1}}variant="outlined" fullWidth>Login</Button>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Button sx ={{mt:2,mb:1,mr:2}}variant="outlined" fullWidth>
            <Google /> <Typography sx={{ml:1}}>Google</Typography>
          </Button>
        </Grid>
        <Grid container
        direction="row"
        justifyContent="end">
          <Link component={RouterLink} color="inherit" to="/auth/register">Crear Cuenta</Link>
        </Grid>
      </Grid>

    </form>

    </AuthLayout>

    </>


  )
}
