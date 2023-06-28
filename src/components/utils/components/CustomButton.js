import React from 'react'
import { Button, Box } from '@mui/material'

const CustomButton = ({ children, type = 'submit', onClick, ...rest }) => {
    return (
     
            <Button
                variant="contained"
                fullWidth
                type={type}
                onClick={onClick}
                sx={{
                    whiteSpace: 'nowrap',
                    p: '10px 20px',


                }}
                {...rest}
            >
                {children}
            </Button>
      
    )
}

export default CustomButton
