import { Box, Button, Container, Link, Paper, Stack, TextField, Typography } from "@mui/material";
import DeviceHubIcon from '@mui/icons-material/DeviceHub';
import Header from "../components/Header";

export default function LoginPage() {
    return (
        <div>
            <Header />
            <Container 
                maxWidth='sm'
                sx={{
                    mt: 10
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
                            <TextField id='password-field' label='Password' variant='outlined' color='primary'/>
                            <Button variant='contained'>Login</Button>
                            <Link href='#' underline='hover' alignSelf='center' marginTop={-2}>Register</Link>
                        </Stack>
                    </Box>
                </Paper>
            </Container>
        </div>
    );
}