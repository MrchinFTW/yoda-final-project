import React from 'react'

import FormTitle from './FormTitle'
import FormContainer from './FormContainer'
import FormInput from './FormInput'
import { ThemeProvider } from '@mui/material/styles'
import { theme } from './UI/theme'




function SignupForm() {


    return (
        <>
            <ThemeProvider theme={theme}>
                <FormContainer>
                    <FormTitle subtitle="Please fill this form to create an account!">
                        Sign up
                    </FormTitle>
                    <FormInput />
                </FormContainer>
            </ThemeProvider>
        </>
    )
}

export default SignupForm