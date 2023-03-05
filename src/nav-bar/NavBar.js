import {AppBar, Container, Toolbar} from "@mui/material";
import Logo from '../logo-cae-montserrat.jpeg';

const NavBar = () => {

    return (
        <AppBar position="static" color="primary">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <a href="#home">
                        <img
                            src={Logo}
                            alt=""
                            width="60"
                        />
                    </a>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default NavBar;