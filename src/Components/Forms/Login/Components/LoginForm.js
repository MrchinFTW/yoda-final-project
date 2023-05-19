import React from "react"
import { Box, Grid, IconButton, InputAdornment, TextField, Link } from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import FormBtn from "../../Components/FormBtn"
import { validation } from "../../Components/FormValidation"
import useLoginForm from "../Hooks/useLoginForm"




const LoginForm = () => {

    const { register, handleSubmit, errors, showPassword, onSubmit,
        onError, handleMouseDownPassword, handleClickShowPassword } = useLoginForm()

    return (
        <>
            <Box component="form" onSubmit={handleSubmit(onSubmit, onError)}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <TextField
                            noValidate
                            id="email"
                            name="email"
                            label="Your e-mail address"
                            fullWidth
                            autoComplete="email address"
                            variant="standard"
                            {...register("email", {
                                required: validation.email.required,
                                pattern: {
                                    value: validation.email.pattern.value,
                                    message: validation.email.pattern.message
                                },
                                notFound: validation.email.notFound
                            })}
                            error={errors.email ? true : false}
                            helperText={errors.email?.message}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            id="password"
                            name="password"
                            label="Password"
                            fullWidth
                            variant="standard"
                            type={showPassword ? 'text' : 'password'}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                        >
                                            {showPassword ? < Visibility /> : <VisibilityOff />}
                                        </IconButton>
                                    </InputAdornment>
                                )
                            }}
                            {...register("password", {
                                required: validation.password.required,
                                wrongPassword: validation.password.wrongPassword
                            })}
                            error={errors.password ? true : false}
                            helperText={errors.password?.message}
                        />
                    </Grid>
                    <FormBtn>Log in</FormBtn>
                    <Grid container justifyContent="center">
                        <Grid item sx={{ mt: 1 }}>
                            <Link href="/signup" variant="body2">
                                Don't have an account? Sign up
                            </Link>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default LoginForm