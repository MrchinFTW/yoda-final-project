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

            main: '#ffffff',
        },
    },
    typography: {
        fontFamily: [
            'Syne', "sans-serif",
        ].join(','),
        fontSize: 13
    },




    

})
