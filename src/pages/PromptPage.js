import { Box, Button, Container, Paper, Stack, TextField } from "@mui/material";
import Header from "../components/Header";

export default function PromptPage() {
    return (
        <div>
            <Header />
            <Container 
                maxWidth='sm' 
                sx={{ 
                    padding: '0 2rem 2rem 2rem'
                }}
            >
                <Stack gap={5}>
                    <Box
                        sx={{
                            width: '300px',
                            height: '300px',
                            backgroundColor: 'black',
                            alignSelf: 'center'
                        }}
                    >
                        <Paper elevation={1} sx={{ height: '100%' }}/>
                    </Box>
                    <TextField id='positive-prompt' label='Positive' variant='outlined' color='secondary' multiline rows={5} />
                    <TextField id='negative-prompt' label='Negative' variant='outlined' color='secondary' multiline rows={5} />
                    <Button 
                        variant='contained' 
                        color='secondary' 
                        sx={{ 
                            color:'white',
                            height: '45px'
                        }}
                    >
                        Generate
                    </Button>
                </Stack>
            </Container>
        </div>
    );
}