import React from 'react'
import { Button, Grid } from '@mui/material'

const FormBtn = ({ children, type = 'submit', ...rest }) => {
    return (
        <Grid item xs={12}>
            <Button variant="contained" fullWidth type={type} sx={{ marginTop: '2px' }}>
                {children}
            </Button>
        </Grid>
    )
}

export default FormBtn
