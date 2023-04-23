import React from "react"
import FormContainer from "../../Components/FormContainer"
import FormTitle from "../../Components/FormTitle"

import LoginForm from "./LoginForm"
import { ThemeProvider } from '@mui/material/styles'
import { theme } from '../.././Styles/theme'


const LoginContainer = () => {
    const title = 'Log in'
    const subtitle = 'Please enter your email and password'

    return <>
        <ThemeProvider theme={theme}>
            <FormContainer>
                <FormTitle subtitle={subtitle}>
                    {title}
                </FormTitle >
                <LoginForm />
            </FormContainer>
        </ThemeProvider>
    </>
}

export default LoginContainer 