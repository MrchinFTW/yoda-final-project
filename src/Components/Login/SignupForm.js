import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import {
    Box,
    Button,
    Checkbox,
    Container,
    CssBaseline,
    Link,
    FormControlLabel,
    FormHelperText,
    Grid,
    IconButton,
    InputAdornment,
    TextField,
    ThemeProvider,
    Typography,
    Paper,
} from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import { createTheme } from '@mui/material/styles'
import FormTitle from './FormTitle'
import FormBtn from './FormBtn'


const theme = createTheme()

function SignupForm() {

    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm()

    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const [checked, setChecked] = useState(false)

    const requiredMsg = "This field is required."
    const password = watch("password")


    const handleClickShowPassword = () => {
        setShowPassword(!showPassword)
    }

    const handleMouseDownPassword = (event) => {
        event.preventDefault()
    }


    const handleClickShowConfirmPassword = () => {
        setShowConfirmPassword(!showConfirmPassword)
    }

    const handleMouseDownConfirmPassword = (event) => {
        event.preventDefault()
    }

    const handleCheckbox = (event) => {
        setChecked(event.target.checked)
    }


    const onSignup = (data) => {
        console.log(data)
        reset()

    }

    const onError = () => {
        console.log('error')
    }


    return (

        <React.Fragment>
            <Container component="main" maxWidth="sm">
                <Paper elevation={1} sx={{ padding: 2, margin: 2 }}>
                    <CssBaseline />
                    <FormTitle subtitle="Please fill this form to create an account!">
                        Sign up
                    </FormTitle>
                    <Box component="form" onSubmit={handleSubmit(onSignup, onError)}>
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    noValidate
                                    id="firstName"
                                    name="firstName"
                                    label="First name"
                                    fullWidth
                                    autoComplete="given-name"
                                    variant="standard"
                                    {...register("firstName", {
                                        required: requiredMsg,
                                        minLength: {
                                            value: 2,
                                            message: "Name too short."
                                        },
                                        maxLength: 20
                                    }
                                    )}
                                    error={errors.firstName ? true : false}
                                    helperText={errors.firstName?.message}
                                />
                            </Grid>

                            <Grid item xs={12} sm={6}>
                                <TextField
                                    noValidate
                                    id="lastName"
                                    name="lastName"
                                    label="Last name"
                                    fullWidth
                                    autoComplete="family-name"
                                    variant="standard"
                                    {...register("lastName", {
                                        required: requiredMsg,
                                        minLength: {
                                            value: 2,
                                            message: "Last name too short."
                                        },
                                        maxLength: 20
                                    }
                                    )}
                                    error={errors.lastName ? true : false}
                                    helperText={errors.lastName?.message}
                                />
                            </Grid>

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
                                        required: requiredMsg,
                                        pattern: {
                                            value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                                            message: 'Please enter a valid email address'
                                        }
                                    })}
                                    error={errors.email ? true : false}
                                    helperText={errors.email?.message}
                                />
                            </Grid>

                            <Grid item xs={12} sm={6}>
                                <TextField
                                    noValidate
                                    id="phoneNumber"
                                    name="phoneNumber"
                                    label="Phone number"
                                    fullWidth
                                    type="number"
                                    variant="standard"
                                    {...register("phoneNumber", {
                                        required: requiredMsg,
                                        minLength: {
                                            value: 10,
                                            message: "Please enter a valid phone number"
                                        }
                                    }
                                    )}
                                    error={errors.phoneNumber ? true : false}
                                    helperText={errors.phoneNumber?.message}
                                />
                            </Grid>

                            <Grid item xs={12} sm={6}>
                                <TextField
                                    noValidate
                                    id="city"
                                    name="city"
                                    label="City"
                                    fullWidth
                                    variant="standard"
                                    {...register("city", {
                                        required: requiredMsg
                                    })}
                                    error={errors.city ? true : false}
                                    helperText={errors.city?.message}
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <TextField
                                    id="password"
                                    name="password"
                                    label="Set password"
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
                                        required: requiredMsg,
                                        pattern: {
                                            value: /^(?=.*[a-zA-Z])(?=.*\d).+$/,
                                            message: "Password must include letters and numbers."
                                        },
                                        minLength: {
                                            value: 6,
                                            message: "Password must be at least 6 characters"
                                        }
                                    })}
                                    error={errors.password ? true : false}
                                    helperText={errors.password?.message}
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <TextField
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    label="Confirm password"
                                    fullWidth
                                    variant="standard"
                                    type={showConfirmPassword ? 'text' : 'password'}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={handleClickShowConfirmPassword}
                                                    onMouseDown={handleMouseDownConfirmPassword}
                                                    edge="end"
                                                >
                                                    {showConfirmPassword ? < Visibility /> : <VisibilityOff />}
                                                </IconButton>
                                            </InputAdornment>
                                        )
                                    }}
                                    {...register("confirmPassword", {
                                        required: requiredMsg,
                                        validate: {
                                            value: (value) =>
                                                value === password || "Passwords do not match"
                                        },
                                    })}
                                    error={errors.confirmPassword ? true : false}
                                    helperText={errors.confirmPassword?.message}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControlLabel
                                    control={<Checkbox name="agreeToTerms" checked={checked}
                                        onChange={handleCheckbox}
                                        inputProps={{ 'aria-label': 'controlled' }} />}
                                    label="Agree to terms and conditions"   {...register("agreeToTerms", { required: true })}

                                />
                                {errors.agreeToTerms && <FormHelperText error >You must agree to the turms & coditions </FormHelperText>}

                            </Grid>
                            <FormBtn>Sign up</FormBtn>
                            <Grid container justifyContent="flex-end">
                                <Grid item sx={{ mt: 1 }}>
                                    <Link href="#" variant="body2">
                                        Already have an account? Sign in
                                    </Link>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Box>
                </Paper>
            </Container >
            {/* </ThemeProvider> */}
        </React.Fragment >
    )
}

export default SignupForm