import {
    AppBar,
    // Avatar,
    Box,
    Button,
    Container,
    IconButton,
    Menu,
    MenuItem,
    Toolbar,
    // Tooltip,
    Typography
} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
// import Logo from '../logo-cae-montserrat.jpeg';
import Logo from '../logo-cae-montserrat_white.svg';
// import Logo from '../logo-cae-montserrat_nomes_logo.svg';
import {useState} from "react";

const pages = ['INICI', 'QUI SOM', 'HISTÒRIA', 'DIRECTORS', 'CONCERTS', '75è ANIVERSARI', 'ENREGISTRAMENTS', 'CONTACTE'];
// const pages = ['Inici', 'Repertori', 'Assajos', 'Formulari'];
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const NavBar = (props) => {
    const [anchorElNav, setAnchorElNav] = useState(null);
    // const [anchorElUser, setAnchorElUser] = useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
        console.log('handleOpenNavMenu');
    };
    // const handleOpenUserMenu = (event) => {
    //     setAnchorElUser(event.currentTarget);
    //     console.log('handleOpenUserMenu');
    // };

    const handleCloseNavMenu = (event) => {
        setAnchorElNav(null);

        let pageToGo = pages.find(page => page === event.target.textContent);

        if (pageToGo === 'INICI') {
            pageToGo = 'Dashboard';
        } else if (pageToGo === 'QUI SOM') {
            pageToGo = 'QuiSom';
        } else if (pageToGo === '75è ANIVERSARI') {
            pageToGo = '75-aniversari';
        }

        if (pageToGo) {
            props.onChangeTab(pageToGo);
        }
    };

    // const handleCloseUserMenu = () => {
    //     setAnchorElUser(null);
    //     console.log('handleCloseUserMenu');
    // };

    const handleChangeTabToDashboard = () => {
        props.onChangeTab('Dashboard');
    }

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    {/* for mobiles */}
                    <Box sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}
                         style={{cursor: "pointer"}}
                         onClick={handleChangeTabToDashboard}
                    >
                        <img
                            src={Logo}
                            alt=""
                            width="60"
                        />
                    </Box>

                    <Box sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon/>
                        </IconButton>
                        <Menu
                            id="menu-appbar"
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
                                display: {xs: 'block', md: 'none'},
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center" color={'black'}>{page}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    {/*<AdbIcon sx={{display: {xs: 'flex', md: 'none'}, mr: 1}}/>*/}

                    {/* for medium or big screens */}
                    <Box sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }}
                         style={{cursor: "pointer"}}
                            onClick={handleChangeTabToDashboard}
                    >
                        <img
                            src={Logo}
                            alt=""
                            width="60"
                        />
                    </Box>
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href=""
                        sx={{
                            mr: 2,
                            display: {xs: 'flex', md: 'none'},
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        {/*CAEM*/}
                    </Typography>
                    <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={handleCloseNavMenu}
                                sx={{my: 2, color: 'white', display: 'block', textTransform: 'none'}}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box>

                    {/*Perfil*/}
                    {/*<Box sx={{flexGrow: 0}}>*/}
                    {/*    <Tooltip title="Open settings">*/}
                    {/*        <IconButton onClick={handleOpenUserMenu} sx={{p: 0}}>*/}
                    {/*            <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg"/>*/}
                    {/*        </IconButton>*/}
                    {/*    </Tooltip>*/}
                    {/*    <Menu*/}
                    {/*        sx={{mt: '45px'}}*/}
                    {/*        id="menu-appbar"*/}
                    {/*        anchorEl={anchorElUser}*/}
                    {/*        anchorOrigin={{*/}
                    {/*            vertical: 'top',*/}
                    {/*            horizontal: 'right',*/}
                    {/*        }}*/}
                    {/*        keepMounted*/}
                    {/*        transformOrigin={{*/}
                    {/*            vertical: 'top',*/}
                    {/*            horizontal: 'right',*/}
                    {/*        }}*/}
                    {/*        open={Boolean(anchorElUser)}*/}
                    {/*        onClose={handleCloseUserMenu}*/}
                    {/*    >*/}
                    {/*        {settings.map((setting) => (*/}
                    {/*            <MenuItem key={setting} onClick={handleCloseUserMenu}>*/}
                    {/*                <Typography textAlign="center">{setting}</Typography>*/}
                    {/*            </MenuItem>*/}
                    {/*        ))}*/}
                    {/*    </Menu>*/}
                    {/*</Box>*/}
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default NavBar;