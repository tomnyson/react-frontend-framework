import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { RootState } from '../../redux/store';
import { useDispatch } from 'react-redux';
import { registerAccount } from '../../redux/slices/user.slide';
import { schemaRegister } from '../../utils/schema';

type TUser = {
  username: string;
  password: string;
  email: string;
  password_confirm: string;
};

const RegisterScreen = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schemaRegister)
  });
  const dispatch = useDispatch();
  const onSubmit = (user: TUser) => {
    dispatch(registerAccount(user));
  };

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
          sx={{
            display: 'flex',
            justifyContent: 'center'
          }}>
          <Box
            component="img"
            sx={{
              width: '50%'
            }}
            src={
              'https://pickbazar-react-admin-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F860%2FPickBazar.png&w=640&q=75'
            }
          />
        </Box>
        <Box
          component="h3"
          sx={{
            width: '100%',
            color: '#e0e0e0',
            textAlign: 'center'
          }}>
          Register new account
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
          <p>Email</p>
          <TextField
            error={errors && errors.email?.message}
            fullWidth
            id="outlined-required"
            placeholder="Enter email"
            helperText={errors.email?.message}
            {...register('email')}
          />
          <p>password</p>
          <TextField
            error={errors && errors.password?.message}
            fullWidth
            type="password"
            id="outlined-required"
            placeholder="Enter password"
            helperText={errors.password?.message}
            {...register('password')}
          />
          <p>Password confirm</p>
          <TextField
            error={errors && errors.password_confirm?.message}
            helperText={errors.password_confirm?.message}
            type="password"
            fullWidth
            {...register('password_confirm', { required: true })}
          />
          <Button
            type="submit"
            sx={{
              mt: '20px'
            }}
            fullWidth
            variant="contained">
            Register
          </Button>
          <Box component="p">
            {' '}
            {`Already have an account?`}
            <SNavigation to="/login">Login</SNavigation>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

const SNavigation = styled(Link)`
  margin-left: 15px;
  color: rgb(0, 159, 127);
  font-weight: bold;
`;
export default RegisterScreen;
