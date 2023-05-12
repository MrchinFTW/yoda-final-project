import classes from '../Styles/FormImg.module.css'

const FormImg = (props) => {

    return <>
        <img src={props.src} alt={props.alt} className={classes.img} />
    </>
}

export default FormImg