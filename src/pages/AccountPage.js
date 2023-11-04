import { Avatar, Box, Button, Container, Paper, Stack, Tab, Tabs, TextField, Typography } from "@mui/material";
import Header from "../components/Header";
import React from "react";

const pages = ['Account', 'Subscription'];

export default function AccountPage() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div>
            <Header />
            <Container maxWidth='lg'>
                <Box sx={{ width: '100%', display: 'flex' }}>
                    <Paper sx={{ height: '100%' }}>
                        <Tabs orientation='vertical' value={value} onChange={handleChange} aria-label='account menu' sx={{ width: '250px' }}>
                            {pages.map(item => {
                                return (
                                    <Tab 
                                        label={item} 
                                        sx={{ 
                                            justifyContent:'center', 
                                            alignItems: 'flex-start',
                                            p: '30px 20px'
                                        }}
                                    />
                                );
                            })}
                        </Tabs>
                    </Paper>
                    <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center', alignItems: 'start'}}>
                        <Paper elevation={2} sx={{ width: '80%' }}>
                            <CustomTabPanel value={value} index={0}>
                                <Typography sx={{ alignSelf: 'flex-start' }} fontSize={26}>Account</Typography>
                                <Avatar sizes='lg' sx={{ width: '150px', height: '150px' }}/>
                                <Box 
                                    display='flex'
                                    flexDirection='column'
                                    gap='40px'
                                    marginTop='20px'
                                >
                                    <TextField 
                                        id='username-field' 
                                        label='Username' 
                                        defaultValue='rob' 
                                        sx={{ 
                                            width: '350px'
                                        }}
                                    />
                                    <TextField 
                                        id='email-field' 
                                        label='Email' 
                                        defaultValue='rob223@gmail.com' 
                                        sx={{ 
                                            width: '350px'
                                        }}
                                    />
                                    <TextField 
                                        id='password-field' 
                                        label='Password' 
                                        sx={{ 
                                            width: '350px'
                                        }}
                                    />
                                </Box>
                                <Button 
                                    variant='contained' 
                                    sx={{ 
                                        alignSelf: 'flex-end', 
                                        width: '100px',
                                        marginTop: 3
                                    }}>
                                    Save
                                </Button>
                            </CustomTabPanel>
                            <CustomTabPanel value={value} index={1}>
                                <Typography sx={{ alignSelf: 'flex-start' }} fontSize={26}>Subscription</Typography>
                            </CustomTabPanel>
                        </Paper>
                    </Box>
                </Box>
            </Container>
        </div>
    );
}

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role='tabpanel'
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Stack position='vertical' sx={{ p: 5, alignItems: 'center', gap: 3 }}>
            {children}
          </Stack>
        )}
      </div>
    );
  }