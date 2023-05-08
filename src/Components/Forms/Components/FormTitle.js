import { Box, Typography } from '@mui/material'
import classes from '../Styles/FormTitle.module.css'



const FormTitle = ({ children }) => {

    return <>
        <Box className={classes.container}>
            <Typography component="h1" variant="h4">
                {children}
            </Typography>
            {/* <img src={mostacheImg} alt= "mostache logo" /> */}
        </Box >
    </>
}

export default FormTitle