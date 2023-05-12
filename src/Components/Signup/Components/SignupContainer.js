import React from 'react'
import FormTitle from '../../Forms/Components/FormTitle'
import FormContainer from '../../Forms/Components/FormContainer'
import SignupForm from './SignupForm'
import { ThemeProvider } from '@mui/material/styles'
import { theme } from '../../Forms/Styles/theme'
import Navbar from '../../Navbar/Components/Navbar'
import FormImg from '../../Forms/Components/FormImg'
import FormCard from '../../Forms/Components/FormCard'
import '../../Forms/Styles/PageStyle.module.css'





function SignupContainer() {

    const signupConfig = {
        title: "Sign Up",
        img: {
            src: '/Assets/Signup.jpg',
            alt: "suits cover pic",
                  },
     
    }



    return (
        <>
            <ThemeProvider theme={theme}>
                {/* <Navbar /> */}
                <FormCard>
                    <FormContainer>
                        <FormTitle>
                            {signupConfig.title}
                        </FormTitle>
                        <SignupForm />
                    </FormContainer>
                    <FormImg src={signupConfig.img.src} alt={signupConfig.img.alt}/>
                </FormCard>
            </ThemeProvider>
        </>
    )
}

export default SignupContainer