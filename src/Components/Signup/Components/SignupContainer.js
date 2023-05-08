import React from 'react'
import FormTitle from '../../Forms/Components/FormTitle'
import FormContainer from '../../Forms/Components/FormContainer'
import SignupForm from './SignupForm'
import { ThemeProvider } from '@mui/material/styles'
import { theme } from '../../Forms/Styles/theme'
import Navbar from '../../Navbar/Components/Navbar'
import FormImg from '../../Forms/Components/FormImg'





function SignupContainer() {
    const title = "Sign up"
    const img = {
        src: '.././Assets/Suits.jpg',
        alt: "suits cover pic"

    }



    return (
        <>
            <ThemeProvider theme={theme}>
            <Navbar />
                <FormContainer>
                    <FormTitle>
                        {title}
                    </FormTitle>
                    <SignupForm />
                </FormContainer>
                {/* <FormImg src={img.src} alt={img.alt} /> */}
            </ThemeProvider>
        </>
    )
}

export default SignupContainer