import React from 'react'

import FormTitle from './FormTitle'
import FormContainer from './FormContainer'
import FormInput from './FormInput'




function SignupForm() {


    return (
        <>
            <FormContainer>
                <FormTitle subtitle="Please fill this form to create an account!">
                    Sign up
                </FormTitle>
                <FormInput/>
            </FormContainer>
        </>
    )
}

export default SignupForm