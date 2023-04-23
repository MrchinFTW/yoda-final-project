import { createTheme } from '@mui/material/styles'
import { grey } from '@mui/material/colors'

export const theme = createTheme({
    palette: {
        primary: {
            main: grey[900],
            light: grey[500],
        },
        secondary: {
            main: grey[600],
        },
    },
    typography: {
        h4: {
            fontWeight: 600
        }
    },


})
