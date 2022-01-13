import * as yup from 'yup';

export const schemaRegister = yup
  .object({
    username: yup.string().required(),
    password: yup.string().min(6).required(),
    email: yup.string().email().required(),
    password_confirm: yup.string().oneOf([yup.ref('password'), null])
  })
  .required();

export const schemaLogin = yup
  .object({
    email: yup.string().email().required(),
    password: yup.string().min(6).required(),
  })
  .required();

