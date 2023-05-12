import { Card } from '@mui/material'
import classes from '../Styles/FormCard.module.css'

const FormCard = ({ children }) => {

    return <>
        <Card className={classes.card}>
            {children}
        </Card>
    </>

}

export default FormCard