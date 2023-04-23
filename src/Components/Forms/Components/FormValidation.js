export const validation = {
    firstName: {
        required: "This field is required",
        minLength: {
            value: 2,
            message: "Name too short.",
        }

    },
    lastName: {
        required: "This field is required",
        minLength: {
            value: 2,
            message: "Last name too short.",
        }

    },
    email: {
        required: "This field is required",
        pattern: {
            message: "Please enter a valid email address",
            value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        }

    },
    phoneNumber: {
        required: "This field is required",
        minLength: {
            value: 10,
            message: "Please enter a valid phone number"
        }
    },
    city: {
        required: "This field is required"
    },
    password: {
        required: "This field is required",
        pattern: {
            value: /^(?=.*[a-zA-Z])(?=.*\d).+$/,
            message: "Password must include letters and numbers.",
        },

        minLength: {
            mesage: "Password must be at least 6 characters",
            value: 6
        }
    },
    confirmPassword: {
        required: "This field is required",
        validate: "Passwords do not match"
    },
    agreeToTerms: {
        message: "You must agree to the turms & coditions "
    }
}
