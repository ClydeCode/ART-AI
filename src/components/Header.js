import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import DeviceHubIcon from '@mui/icons-material/DeviceHub';
import { Link } from '@mui/material';
import { UserContext } from '../contexts/UserContext';

const pages = ['Prompt', 'Gallery', 'About'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

export default function Header() {
    const { user } = React.useContext(UserContext);

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
  
    function handleOpenNavMenu(e) {
      setAnchorElNav(e.currentTarget);
    };

    function handleOpenUserMenu(e) {
      setAnchorElUser(e.currentTarget);
    };
  
    function handleCloseNavMenu() {
      setAnchorElNav(null);
    };
  
    function handleCloseUserMenu() {
      setAnchorElUser(null);
    };

    return (
        <AppBar 
            position="static"
            sx={{
                 mb: { xs: '3rem', md: '5rem' }
            }}>
            <Container maxWidth="xl">
                <Toolbar 
                    disableGutters
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}
                >
                    <Link
                        alignItems='center'
                        color='inherit'
                        underline='none'
                        href='/'
                        sx={{
                            display: {xs: 'none', md: 'flex'}
                        }}
                    >
                        <DeviceHubIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                        <Typography 
                            variant="h5" 
                            fontFamily="Montserrat"
                            sx={{
                                // mr: 2,
                                display: { xs: 'none', md: 'flex' },
                            }}
                        >
                            ART-AI
                        </Typography>
                    </Link>
                    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size='large'
                            aria-label='account of current user'
                            aria-controls='menu-appbar'
                            aria-haspopup='true'
                            onClick={handleOpenNavMenu}
                            color='inherit'
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id='menu-appbar'
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                            >
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Link
                                        color='inherit'
                                        underline='none'
                                        href={'/' + page}
                                    >
                                        {page}
                                    </Link>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Link
                        display='flex'
                        color='inherit'
                        underline='none'
                        alignItems='center'
                        href='/'
                    >
                        <DeviceHubIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                        <Typography 
                            variant='h5' 
                            fontFamily='Montserrat'
                            sx={{
                                display: { xs: 'flex', md: 'none' },
                            }}
                        >
                            ART-AI
                        </Typography>       
                    </Link>
                    <Box sx={{ flexGrow: 1, marginLeft: 2, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                        <Button
                            key={page}
                            href={'/' + page}
                            onClick={handleCloseNavMenu}
                            sx={{ 
                                my: 2,
                                display: 'block' 
                            }}
                            color='inherit'
                        >
                            {page}
                        </Button>
                        ))}
                    </Box>
                    { user ?
                        (<Box sx={{ flexGrow: 0 }}>
                            <Tooltip title="Open settings">
                                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                    <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                                </IconButton>
                            </Tooltip>
                            <Menu
                                sx={{ mt: '45px' }}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >
                                {settings.map((setting) => (
                                    <Link 
                                    href={'/' + setting}
                                    underline='none'
                                    color='inherit'
                                    >
                                        <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                            <Typography textAlign="center">
                                                {setting}
                                            </Typography>
                                        </MenuItem>
                                    </Link>
                                ))}
                            </Menu>
                        </Box>)
                        :
                        (<Button color='inherit' href='/Login'>Login</Button>)
                    }
                </Toolbar>
            </Container>
        </AppBar>
    )
}