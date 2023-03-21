import React from "react"
import { useForm } from "react-hook-form"

const LoginForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        email: "",
        password: ""
    })

    const onSubmit = (data) => {
        console.log(data)
    }

    const onError = () => {
        console.log('Error')
    }

    return (
        <form onSubmit={handleSubmit(onSubmit, onError)}>
            <div>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" {...register("email", { required: true, pattern: /^\S+@\S+\.\S+$/i })} placeholder='Enter email' />
            </div>
            {errors.email?.type === "required" && <p>This field is required</p>}
            {errors.email?.type === "pattern" && <p>Please enter a valid email</p>}
            <div>
                <label htmlFor="password">Password</label>
                <input type="password" id="password" {...register("password", {
                    required: true,
                    minLength: 6
                })} placeholder='Enter password' />
            </div>
            {errors.email?.type === "required" && <p>This field is required</p>}
            {errors.password?.type === "minLength" && <p>Password must be at least 6 characters long</p>}
            <button type="submit">Sign in</button>
        </form>
    )
}

export default LoginForm
