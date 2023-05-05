import { useState } from 'react'
import { useForm } from 'react-hook-form'


const useFormInput = () => {
    const { register, handleSubmit, watch, reset, formState: { errors }, setError } = useForm()

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
        const signupUrl = 'http://localhost:999/signup'

        fetch(signupUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },

            body: JSON.stringify(data)

        }).then(response => {

            if (response.status === 409) {

                setError("email", {
                    type: "manual",
                    message: "Email already exists."

                })
            } else {
                
                console.log(response)
                reset()
            }
        })
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