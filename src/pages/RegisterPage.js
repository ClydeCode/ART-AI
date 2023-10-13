import { Box, Button, Container, Link, Paper, Stack, TextField, Typography } from "@mui/material";
import DeviceHubIcon from '@mui/icons-material/DeviceHub';
import Header from "../components/Header";

export default function RegisterPage() {
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
                            <TextField id='username-field' label='Username' variant='outlined' color='primary'/>
                            <TextField id='email-field' label='Email' variant='outlined' color='primary'/>
                            <TextField id='password-field' label='Password' variant='outlined' color='primary'/>
                            <TextField id='confirm-password-field' label='Confirm Password' variant='outlined' color='primary'/>
                            <Button 
                                variant='contained'
                                sx={{
                                    height: '45px',
                                    mt: 2
                                }}
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