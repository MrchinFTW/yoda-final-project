import { Card } from '@mui/material'
import '../Styles/FormCard.module.css'

const FormCard = ({ children }) => {

    return <>
        <Card>
            {children}
        </Card>
    </>

}

export default FormCard