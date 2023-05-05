import React from 'react'

import FormTitle from '../../Forms/Components/FormTitle'
import FormContainer from '../../Forms/Components/FormContainer'
import SignupForm from './SignupForm'
import { ThemeProvider } from '@mui/material/styles'
import { theme } from '../../Forms/Styles/theme'


function SignupContainer() {
    const title = "Sign up"
    return (
        <>
            <ThemeProvider theme={theme}>
                <FormContainer>
                    <FormTitle>
                        {title}
                    </FormTitle>
                    <SignupForm />
                </FormContainer>
            </ThemeProvider>
        </>
    )
}

export default SignupContainer