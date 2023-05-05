import React from 'react'
import { Box, Checkbox, FormControlLabel, FormHelperText, Grid, IconButton, InputAdornment, TextField, Link } from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import FormBtn from '../../Forms/Components/FormBtn'
import useFormInput from '../Hooks/useFormInput'
import { validation } from '../../Forms/Components/FormValidation'


const SignupForm = () => {
    const {
        register,
        handleSubmit,
        errors,
        showPassword,
        showConfirmPassword,
        checked,
        password,
        handleClickShowPassword,
        handleMouseDownPassword,
        handleClickShowConfirmPassword,
        handleMouseDownConfirmPassword,
        handleCheckbox,
        onSubmit,
        onError
    } = useFormInput()




    return <>
        <Box component="form" onSubmit={handleSubmit(onSubmit, onError)}>
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
                            required: validation.firstName.required,
                            minLength: {
                                value: validation.firstName.minLength.value,
                                message: validation.firstName.minLength.message
                            },
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
                            required: validation.lastName.required,
                            minLength: {
                                value: validation.lastName.minLength.value,
                                message: validation.lastName.minLength.message
                            },
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
                            required: validation.confirmPassword.required,
                            validate: {
                                value: (value) =>
                                    value === password || validation.confirmPassword.validate
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
                    {errors.agreeToTerms && <FormHelperText error >{validation.agreeToTerms.message} </FormHelperText>}

                </Grid>
                <FormBtn>Sign up</FormBtn>
                <Grid container justifyContent="flex-end">
                    <Grid item sx={{ mt: 1 }}>
                        <Link href="/signup" variant="body2">
                            Already have an account? Sign in
                        </Link>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    </>
}

export default SignupForm