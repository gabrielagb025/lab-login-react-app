import * as Yup from 'yup';

const baseUserSchema = {
    email: Yup  
        .string('Invalid email')
        .email('Invalid email')
        .required('Email required'),
    password: Yup 
        .string('Invalid password')
        .min(8, 'Password should be 8 or more characters')
        .required('Password required')
}

export const registerSchema = Yup.object({
    name: Yup
        .string('Invalid name')
        .min(2, 'Name should be 2 or more characters')
        .required('Name required'),
        ...baseUserSchema
})

export const loginSchema = Yup.object({
    ...baseUserSchema
})