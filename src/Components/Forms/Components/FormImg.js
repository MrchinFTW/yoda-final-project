import '../Styles/FormCard.module.css'

const FormImg = (props) => {

    return <>
        <img src={props.src} alt={props.alt} className={props.className} />
    </>
}

export default FormImg