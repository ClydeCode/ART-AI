import { Box, Button, Container, Link, Paper, Stack, TextField, Typography } from "@mui/material";
import DeviceHubIcon from '@mui/icons-material/DeviceHub';
import Header from "../components/Header";
import { Navigate, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import { RegisterRequest } from "../api/UserAPI";

export default function RegisterPage() {
    const navigate = useNavigate();

    const { user, SetUser } = useContext(UserContext);

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    function handleUsernameChange(e) {
        setUsername(e.target.value);
    }

    function handleEmailChange(e) {
        setEmail(e.target.value);
    }

    function handlePasswordChange(e) {
        setPassword(e.target.value);
    }

    function handleConfirmPasswordChange(e) {
        setConfirmPassword(e.target.value);
    }

    async function handleClick() {
        try {
            await RegisterRequest(username, email, password, confirmPassword)
                .then((response) => response.data)
                .then((data) => {
                    const { userName, email, token } = data;

                    SetUser(userName, email, token);
                })
        }
        catch (e) {
            console.error(e);
        }
    }

    if (user) return <Navigate to='/account' />

    return (
        <div>
            <Header />
            <Container 
                maxWidth='sm'
                sx={{
                    padding: '0 1rem 2rem 1rem'
                }}
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
                            <TextField id='email-field' label='Email' variant='outlined' color='primary' onChange={handleEmailChange}/>
                            <TextField id='password-field' label='Password' variant='outlined' color='primary' onChange={handlePasswordChange}/>
                            <TextField id='confirm-password-field' label='Confirm Password' variant='outlined' color='primary' onChange={handleConfirmPasswordChange}/>
                            <Button 
                                variant='contained'
                                sx={{
                                    height: '45px',
                                    mt: 2
                                }}
                                onClick={handleClick}
                            >
                                Register
                            </Button>
                            <Link href='/login' underline='hover' alignSelf='center' marginTop={-2}>Already have an account?</Link>
                        </Stack>
                    </Box>
                </Paper>
            </Container>
        </div>
    );
}