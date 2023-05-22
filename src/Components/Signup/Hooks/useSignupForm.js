`import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { validation } from "../../Forms/Components/FormValidation"
import axios from 'axios'

const useSignupForm = () => {
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
        const signupUrl = 'http://localhost:3001/api/signup'

        axios.post(signupUrl, data, )
            .then(response => {
                console.log(response.data)
                const token = response.data.data.token
                localStorage.setItem('token', token)
            })
            .catch(error => {
                if (error.response) {
                    const status = error.response.status

                    if (status === 409) {
                        setError("email", {
                            type: "manual",
                            message: validation.email.exists
                        })
                    } else if (status === 422 || status === 500) {

                        setError("agreeToTerms", {
                            type: "manual",
                            message: validation.agreeToTerms.general
                        })
                    }
                } else {
                    console.log("signed up")
                    reset()
                }
            })


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
    }
}

export default useSignupForm