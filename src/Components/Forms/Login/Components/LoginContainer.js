import React from "react"
import FormContainer from "../../Components/FormContainer"
import FormTitle from "../../Components/FormTitle"
import LoginForm from "./LoginForm"
import { ThemeProvider } from '@mui/material/styles'
import { theme } from '../.././Styles/theme'
import FormCard from "../../Components/FormCard"
import FormImg from "../../Components/FormImg"



const LoginContainer = () => {

    const loginConfig = {
        title: 'Log In',
        img: {
            src: '/Assets/Cover.jpg',
            alt: 'lady in office'
        }
    }


    return <>
        <ThemeProvider theme={theme}>
            <FormCard>
                <FormContainer>
                    <FormTitle >
                        {loginConfig.title}
                    </FormTitle >
                    <LoginForm />
                </FormContainer>
                <FormImg src={loginConfig.img.src} alt={loginConfig.img.alt} />
            </FormCard>
        </ThemeProvider>
    </>
}

export default LoginContainer 