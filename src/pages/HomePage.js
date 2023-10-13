import { Box, Container, Paper, Stack, Typography } from '@mui/material';
import Image1 from '../assets/images/image3.jpg';
import Header from '../components/Header';

export default function HomePage() {
    return (
        <div>
            <Header />
            <Container maxWidth='lg'>
                <Stack 
                    sx={{ 
                        alignItems: { xs: 'center', md: 'start' },
                        gap: { xs: '30px', md: '25px' },
                        flexDirection: { xs: 'column', md: 'row'}
                    }}
                >
                    <Box
                        component="img"
                        sx={{
                            width: { xs: '100%', md: '55%' }
                        }}
                        alt="The artwork"
                        src={ Image1 }
                    />

                    <Stack gap='30px'>
                        <Box 
                            sx={{
                                display: 'flex',
                                flexDirection: { xs: 'column', md: 'row' },
                                gap: { xs: '30px', md: '20px' }
                            }}
                        >
                            <Box 
                                sx={{
                                    width: { xs: '85%', md: '2px'},
                                    height: { xs: '2px', md: 'auto'},
                                    background: {xs: 'linear-gradient(90deg, #ff4abf, 60%, #03adc0)', md: 'linear-gradient(#ff4abf, 60%, #03adc0)'},
                                    alignSelf: { xs: 'center', md: 'auto' }
                                }}
                            />
                            <Typography 
                                variant='h5'
                                sx={{
                                    textAlign: { xs: 'center', md: 'start' }
                                }}
                            >
                                Discover AI-Generated Art: Your Vision, Our Canvas
                            </Typography>
                        </Box>
                        <Paper sx={{ padding: 1.5}}>
                            <Typography 
                                letterSpacing='.4px'
                                lineHeight='2.2rem'
                                sx={{
                                    textAlign: { xs: 'center', md: 'start' }
                                }}
                            >
                                Welcome to ART-AI, where art meets artificial intelligence in a fusion of creativity and innovation. 
                                Our cutting-edge AI technology brings your visions to life, transforming text into breathtaking artwork.
                            </Typography>
                        </Paper>
                    </Stack>
                </Stack>
            </Container>
        </div>
    );
}