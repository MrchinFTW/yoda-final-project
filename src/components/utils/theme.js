import { createTheme } from '@mui/material/styles'
import 'typeface-saira-condensed'
import '../../App.css'

export const theme = createTheme({
    palette: {
        primary: {
            main: '#222222',
            light: 'rgba(0, 0, 0, 0.6)',
        },
        secondary: {
            main: '#f5f5f5',
        },
        background: {
            default: '#f5f5f5',
        },
    },
    typography: {
        fontSize: 13.5,
        // fontFamily: 'Montserrat, sans-serif'
        fontFamily: 'Rubik, sans-serif'

    },
})
