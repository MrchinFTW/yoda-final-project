import classes from '../Styles/FormImg.module.css'
import { Box } from "@mui/system"

const FormImg = (props) => {

    return <>
        <Box className={classes.side}>
            <img src={props.src} alt={props.alt} />
        </Box>
    </>

}

export default FormImg