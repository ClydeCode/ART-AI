import { Box, Button, Container, Link, Paper, Stack, TextField, Typography } from '@mui/material';
import DeviceHubIcon from '@mui/icons-material/DeviceHub';
import Header from '../components/Header';
import { AuthRequest } from '../api/UserAPI';
import { useContext, useState } from 'react';
import { useNavigate, Navigate } from 'react-router';
import { UserContext } from '../contexts/UserContext';
import { SnackbarContext, types } from '../contexts/SnackbarContext';

export default function LoginPage() {
    const navigate = useNavigate();

    const { user, SetUser } = useContext(UserContext);
    const { ShowSnackbarAlert } = useContext(SnackbarContext);

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function handleUsernameChange(e) {
        setUsername(e.target.value);
    }

    function handlePasswordChange(e) {
        setPassword(e.target.value);
    }

    async function handleClick() {
        try {
            await AuthRequest(username, password)
                .then((response) => response.data)
                .then((data) => {
                    const { userName, email, token } = data;

                    SetUser(userName, email, token);

                    ShowSnackbarAlert('Login successful');
                });
        }
        catch (e) {
            console.error(e);

            ShowSnackbarAlert('Wrong login details!', types[1]);
        }
    }

    if (user) return <Navigate to='/account' />

    return (
        <div>
            <Header />
            <Container 
                maxWidth='sm'
            >
                <Paper elevation={1}>
                    <Box padding={10}>
                        <Stack gap={4}>
                            <Box display='flex' alignItems='center' justifyContent='center'>
                                <DeviceHubIcon sx={{ mr: 1 }} />
                                <Typography 
                                    variant='h5'
                                    fontFamily='Montserrat'
                                    fontSize='1.9rem'
                                    sx={{
                                        cursor: 'default',
                                        userSelect: 'none'
                                    }}
                                >
                                    ART-AI
                                </Typography>
                            </Box>
                            <TextField id='username-field' label='Username' variant='outlined' color='primary' onChange={handleUsernameChange}/>
                            <TextField id='password-field' label='Password' variant='outlined' color='primary' onChange={handlePasswordChange}/>
                            <Button 
                                variant='contained'
                                sx={{
                                    height: '45px',
                                    mt: 2
                                }}
                                onClick={handleClick}
                            >
                                Login
                            </Button>
                            <Link href='/register' underline='hover' alignSelf='center' marginTop={-2}>Register</Link>
                        </Stack>
                    </Box>
                </Paper>
            </Container>
        </div>
    );
}