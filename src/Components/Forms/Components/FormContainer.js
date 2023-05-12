import { Container, Paper, CssBaseline } from "@mui/material"
import classes from '../Styles/FormContainer.module.css'


const FormContainer = ({ children, className }) => {
    return <>
        <Container component="main" maxWidth="xs" className="container" sx={{ margin: 0 }}>
            <CssBaseline />
            <div className={`${classes.paper} ${className}`}>
                {children}
            </div>

        </Container>
    </>

}

export default FormContainer
