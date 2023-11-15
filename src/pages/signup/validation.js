import * as yup from 'yup';

const validations = yup.object().shape({
  username: yup.string().required('Required field.'),
  email: yup.string().email('Enter a valid email.').required('Required field.'),
  password: yup.string().min(5, 'The password must be at least 5 characters.').required('Required field.'),
  passwordConfirm: yup
    .string()
    .min(5, 'The password must be at least 5 characters.')
    .oneOf([yup.ref('password')], 'Passwords are different.')
    .required('Required field.'),
  phone: yup.string().min(10, 'Phone number must be at least 10 characters.').max(10, 'Phone number cannot exceed 10 characters.'),
  address: yup.string().max(50, 'Address cannot exceed 50 characters.').min(10, 'Phone number must be at least 10 characters.'),
});

export default validations;