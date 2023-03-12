import './App.css';
import Dashboard from "./dashboard/Dashboard";
import NavBar from "./nav-bar/NavBar";
import {createTheme} from '@material-ui/core/styles';
import {ThemeProvider} from "@mui/material/styles";
import {useState} from "react";
import Assajos from "./assajos/Assajos";
import Repertori from "./repertori/Repertori";

// TODO
// - La imagte de el repertori s'ha de fer més estreta. Perq sinó fa mal els ulls.
// - pestanya "coral" per tornar a l'inici?

/*
    How to use colors throughout the app:
    - 60%    -> #ffffff  (neutral color)
    - 30%    -> #105C77  (brand color)
    - 10%    -> #13BBB2  (accent color. The one that draws attention)
    -        -> #60CEC8  (other possible accent color)
 */

const theme = createTheme({
    palette: {
        primary: {
            // main: '#105C77',
            main: '#1c2944',
        },
    },
});

function App() {
    const [currentTab, setCurrentTab] = useState('Dashboard');

    const changeTabHandler = (tabId) => {
        setCurrentTab(tabId)
    }

    return (
        <ThemeProvider theme={theme}>
            <div className="app-container">
                <NavBar onChangeTab={changeTabHandler}></NavBar>
                {currentTab === 'Dashboard' && <Dashboard></Dashboard>}
                {currentTab === 'Assajos' && <Assajos></Assajos>}
                {currentTab === 'Repertori' && <Repertori></Repertori>}
            </div>
        </ThemeProvider>
    )
}

export default App;
