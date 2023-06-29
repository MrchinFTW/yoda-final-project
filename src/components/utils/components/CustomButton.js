import React from 'react'
import { Button, Box, useTheme } from '@mui/material'

const CustomButton = ({ children, type = 'submit', onClick, ...rest }) => {
    const theme = useTheme()

    return (
        <Button
            variant="contained"
            fullWidth
            type={type}
            onClick={onClick}
            sx={{
                whiteSpace: 'nowrap',
                p: '10px 20px',
                background: 'primary.main',
                
            }}
            {...rest}
        >
            {children}
        </Button>
    )
}

export default CustomButton
