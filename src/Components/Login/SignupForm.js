import React from 'react'

import FormTitle from './FormTitle'
import FormContainer from './FormContainer'
import FormInput from './FormInput'
import { ThemeProvider } from '@mui/material/styles'
import { theme } from './UI/theme'




function SignupForm() {
    const subtitle = "Please fill this form to create an account!"
    const title = " Sign up"
    return (
        <>
            <ThemeProvider theme={theme}>
                <FormContainer>
                    <FormTitle subtitle={subtitle}>
                        {title}
                    </FormTitle>
                    <FormInput />
                </FormContainer>
            </ThemeProvider>
        </>
    )
}

export default SignupForm