import { useState } from 'react'
import { useForm } from 'react-hook-form'


const useFormInput = () => {
    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm()

    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const [checked, setChecked] = useState(false)

    const password = watch("password")

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword)
    }

    const handleMouseDownPassword = (event) => {
        event.preventDefault()
    }

    const handleClickShowConfirmPassword = () => {
        setShowConfirmPassword(!showConfirmPassword)
    }

    const handleMouseDownConfirmPassword = (event) => {
        event.preventDefault()
    }

    const handleCheckbox = (event) => {
        setChecked(event.target.checked)
    }

    const onSubmit = (data) => {
        console.log(data)
        reset()
    }

    const onError = () => {
        console.log('error')
    }

    return {
        register,
        handleSubmit,
        watch,
        reset,
        errors,
        showPassword,
        showConfirmPassword,
        checked,
        password,
        handleClickShowPassword,
        handleMouseDownPassword,
        handleClickShowConfirmPassword,
        handleMouseDownConfirmPassword,
        handleCheckbox,
        onSubmit,
        onError
    }
}

export default useFormInput