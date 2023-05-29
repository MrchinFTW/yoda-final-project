import { Container, CssBaseline } from "@mui/material"
import classes from '../Styles/FormContainer.module.css'
import { Box } from "@mui/system"


const FormContainer = ({ children, className }) => {
    return <>
        <Container component="main" maxWidth="xs" className={classes.container}>
            <CssBaseline />
            {/* <Box className={`${classes.paper} ${className}`}> */}
            {children}
            {/* </Box> */}
        </Container>
    </>

}

export default FormContainer
