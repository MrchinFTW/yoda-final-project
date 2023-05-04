import React from "react"
import { Box, Grid, IconButton, InputAdornment, TextField, Link } from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import useFormInput from '../../../Signup/Hooks/useFormInput'
import FormBtn from "../../Components/FormBtn"
import { validation } from "../../Components/FormValidation"
import useUserContext from "../../../../Context/UserContext"




const LoginForm = () => {


    const { register, handleSubmit, errors, showPassword, handleClickShowPassword, onSubmit,
        onError, handleMouseDownPassword, } = useFormInput()

    return (
        <>
            <Box component="form" onSubmit={handleSubmit(onSubmit, onError)}>
                <Grid container spacing={3}>

                    <Grid item xs={12}>
                        <TextField
                            noValidate
                            id="email"
                            name="email"
                            label="Email address"
                            fullWidth
                            autoComplete="email address"
                            variant="standard"
                            {...register("email", {
                                required: validation.email.required,
                                pattern: {
                                    value: validation.email.pattern.value,
                                    message: validation.email.pattern.message
                                }
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
                                pattern: {
                                    value: validation.password.pattern.value,
                                    message: validation.password.pattern.message
                                },
                                minLength: {
                                    value: validation.password.minLength.value,
                                    message: validation.password.minLength.message
                                }
                            })}
                            error={errors.password ? true : false}
                            helperText={errors.password?.message}
                        />
                    </Grid>
                    <FormBtn>Log in</FormBtn>
                    <Grid container justifyContent="flex-end">
                        <Grid item sx={{ mt: 1 }}>
                            <Link href="/login" variant="body2">
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