import React from "react"
import { useForm } from 'react-hook-form'
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

const SignupForm = () => {

    const schema = yup.object().shape({
        firstName: yup.string().min(2).required("This field is required"),
        lastName: yup.string().min(2).required(),
        email: yup.string().email().required(),
        age: yup.number().positive().integer().required(),
        phoneNumber: yup.number(),
        password: yup.string().min(4).max(20).required(),
        confirmPassword: yup.string().oneOf([yup.ref("password"), null]).required()
    })


    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    })


    const onSignup = (data) => {
        console.log(data)
    }


    return (
        <form onSubmit={handleSubmit(onSignup)}>
            <input type='text' placeholder='first name...' {...register("firstName")} />
            <input type='text' placeholder='last name...' {...register("lastName")} />
            <input type='text' placeholder='email' {...register("email")} />
            <input type='number' placeholder='age'{...register("age")} />
            <input type='number' placeholder='phone number' {...register("phoneNumber")} />
            <input type='password' placeholder='password'  {...register("password")} />
            <input type='password' placeholder='confirm password...'  {...register("confirmPassword")} />
            <input type='submit' placeholder='submit'  {...register("submit")} />
        </form>
    )
}

export default SignupForm