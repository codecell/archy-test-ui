import * as yup from 'yup'

export  const newUserValidator = () =>
yup.object().shape({
  email: yup
    .string()
    .required('* Email is required')
    .matches(
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
      'Not a valid email'
    ),
  fullname: yup.string().required('* Full name is required.'),
  role: yup.string().required('* The User"s role cannot be empty.'),
})