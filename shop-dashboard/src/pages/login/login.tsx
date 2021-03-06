import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { schemaLogin } from '../../utils/schema';
import { useDispatch } from 'react-redux';
import { loginAccount } from '../../redux/slices/user.slide';
import { TLogin } from '../../utils/types/user.type';

const LoginScreen = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schemaLogin)
  });
  const dispatch = useDispatch();
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  const onSubmit = (user: TLogin) => {
    console.log({ user });
    dispatch(loginAccount(user));
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
            error={errors && errors.email?.message}
            fullWidth
            id="outlined-required"
            placeholder="Enter username"
            helperText={errors.email?.message}
            {...register('email')}
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
          <Box component="p">
            {' '}
            {`don't have any account?`}
            <SNavigation to="/register">Register as Shop Owner</SNavigation>
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
export default LoginScreen;
