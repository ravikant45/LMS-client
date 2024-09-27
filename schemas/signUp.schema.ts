import * as Yup from 'yup';

export const signUpSchema = Yup.object().shape({
    name: Yup.string()
        .min(3, 'Name must be at least 3 characters long')
        .max(50, 'Name can be at most 50 characters long')
        .required('Name is required'),
    email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
    password: Yup.string()
        .min(6, 'Password must be at least 6 characters long')
        .max(20, 'Password can be at most 20 characters long')
        .required('Password is required'),
});
