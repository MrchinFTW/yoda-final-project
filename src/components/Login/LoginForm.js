import React from "react"
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Link from '@mui/material/Link'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { useForm } from "react-hook-form"

const theme = createTheme()

const LoginForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            email: "",
            password: ""
        }
    })

    const onSubmit = (data) => {
        console.log(data)
    }

    const onError = () => {
        console.log('Error')
    }

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',

                    }}
                >
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit(onSubmit, onError)} noValidate sx={{ mt: 1 }}>


                        <TextField type="email" id="email" {...register("email", { required: true, pattern: /^\S+@\S+\.\S+$/i })} margin="normal" fullWidth
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            sx={{ mb: 0 }}
                            error={errors.email ? true : false}
                            helperText={
                                errors.email?.type === "required" ? "This field is required" :
                                    errors.email?.type === "pattern" ? "Please enter a valid email" :
                                        ""}
                        />

                        <TextField type="password" id="password" {...register("password", {
                            required: true,
                        })} margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            autoComplete="current-password"
                            sx={{ mb: 0 }}
                            error={errors.password ? true : false}
                            helperText={
                                errors.password?.type === "required" ? "This field is required" :
                                    ""}
                        />

                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" sx={{ '& .MuiSvgIcon-root': { fontSize: 20 }, }} />}
                            label="Remember me"
                        />

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{
                                mt: 3, mb: 2, backgroundColor: "black", "&:hover": {
                                    backgroundColor: "black"
                                }
                            }}

                        >
                            Sign In
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2">
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link href="#" variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    )
}

export default LoginForm
