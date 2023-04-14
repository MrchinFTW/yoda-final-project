import React from 'react'
import { Button, Grid } from '@mui/material'
import classes from './UI/FormBtn.module.css'

const FormBtn = ({ children, type = 'submit' }) => {
    return (
        <Grid item xs={12}>
            <Button variant="contained" fullWidth type={type} className={classes.btn}>
                {children}
            </Button>
        </Grid>
    )
}

export default FormBtn
