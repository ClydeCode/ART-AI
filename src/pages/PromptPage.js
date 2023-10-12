import { Box, Button, Container, Paper, Stack, TextField } from "@mui/material";
import Header from "../components/Header";

export default function PromptPage() {
    return (
        <div>
            <Header />
            <Container 
                maxWidth='sm' 
                sx={{ 
                    mt: 5,
                    padding: 5
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
                    <TextField id='positive-prompt' label='Positive' variant='outlined' multiline rows={5} />
                    <TextField id='negative-prompt' label='Negative' variant='outlined' multiline rows={5} />
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