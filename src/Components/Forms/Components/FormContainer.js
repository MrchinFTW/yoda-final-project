import { Container, Paper, CssBaseline } from "@mui/material"
import classes from '../Styles/FormContainer.module.css'

const FormContainer = ({ children }) => {
    return <>
        <Container component="main" maxWidth="sm">
            <Paper elevation={1} className={classes.paper}>
                <CssBaseline />
                {children}
            </Paper>
        </Container>
    </>

}

export default FormContainer
