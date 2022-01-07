import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup
  .object({
    username: yup.string().required(),
    password: yup.string().min(6).required()
  })
  .required();

const LoginScreen = () => {
  const [user, setUser] = useState({ username: '', password: '' });
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  });

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  const onSubmit = (data: any) => {};

  console.log('user', user);
  console.log('errors', errors);
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '30',
        height: '100vh',
        background: '#e0e0e0'
      }}>
      <Box sx={{ width: 350, background: '#fff', padding: '20px' }}>
        <Box
          component="img"
          sx={{
            width: '100%'
          }}
          src={
            'https://pickbazar-react-admin-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F860%2FPickBazar.png&w=640&q=75'
          }
        />
        <Box
          component="h3"
          sx={{
            width: '100%',
            color: '#e0e0e0',
            textAlign: 'center'
          }}>
          Login to admin
        </Box>
        <Box
          component="form"
          method="post"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          autoComplete="off">
          <p>Username</p>
          <TextField
            error={errors && errors.username?.message}
            fullWidth
            id="outlined-required"
            placeholder="Enter username"
            helperText={errors.username?.message}
            {...register('username')}
          />
          <p>Password</p>
          <TextField
            error={errors && errors.password?.message}
            defaultValue="Hello World"
            helperText={errors.password?.message}
            type="password"
            fullWidth
            {...register('password', { required: true })}
          />
          <Button
            type="submit"
            sx={{
              mt: '20px'
            }}
            fullWidth
            variant="contained">
            Login
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default LoginScreen;
