import { createTheme } from '@mui/material/styles'
import { grey } from '@mui/material/colors'
import 'typeface-saira-condensed'



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
        fontFamily: [
            'Roboto Flex', "sans-serif",
        ].join(','),

    },


})
