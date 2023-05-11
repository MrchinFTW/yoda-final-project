import { useState } from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import useUserContext from "../../../../Context/UserContext"
import { validation } from '../../Components/FormValidation'




const useLoginForm = () => {
    const { register, handleSubmit, reset, formState: { errors }, setError } = useForm()
    const { userInfo } = useUserContext()
    const [showPassword, setShowPassword] = useState(false)
    const loginUrl = 'http://localhost:999/login'

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword)
    }

    const handleMouseDownPassword = (event) => {
        event.preventDefault()
    }


    const onSubmit = (data) => {
        axios.post(loginUrl, { email: data.email, password: data.password })
            .then(response => {
                const { token, user } = response.data
                localStorage.setItem('jwt-token', token)
                console.log('welcome', user.firstName)
                userInfo(user.firstName, user.lastName)
            })
            .catch(error => {
                if (error.response && error.response.status === 401) {
                    if (error.response.data.msg === "user not found") {
                        setError("email", {
                            type: "manual",
                            message: validation.email.notFound
                        })
                    } else if (error.response.data.msg === "wrong password") {

                        setError("password", {
                            type: "manual",
                            message: validation.password.wrongPassword
                        })
                    }
                } else {
                    console.error('Error logging in: ', error)
                }
            })
    }



    return {
        register,
        handleSubmit,
        reset,
        errors,
        showPassword,
        handleClickShowPassword,
        handleMouseDownPassword,
        onSubmit,
    }
}

export default useLoginForm