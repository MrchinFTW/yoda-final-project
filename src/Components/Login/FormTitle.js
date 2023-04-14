import { Box, Typography } from '@mui/material'
import classes from './UI/FormTitle.module.css'

const FormTitle = ({ children, subtitle }) => {

    return <>
        <Box className={classes.container}>
            <Typography component="h1" variant="h4" className={classes.title}>
                {children}
            </Typography>
            <Typography variant="body1" className={classes.subtitle}>{subtitle}</Typography>
        </Box >
    </>
}

export default FormTitle