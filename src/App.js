import './App.css';
import Dashboard from "./body/dashboard/Dashboard";
import NavBar from "./nav-bar/NavBar";
import NavBar75Aniversari from "./nav-bar/NavBar75Aniversari";
import {createTheme} from '@material-ui/core/styles';
import {ThemeProvider} from "@mui/material/styles";
import {useState} from "react";
import Assajos from "./body/75e-aniversari/assajos/Assajos";
import Repertori from "./body/75e-aniversari/repertori/Repertori";
import Formulari from "./body/75e-aniversari/formulari/Formulari";
import QuiSom from "./body/qui-som/QuiSom";
import Concert75e from "./body/75e-aniversari/concert-75e/Concert75e";
import Directors from "./body/directors/Directors";
import Concerts from "./body/concerts/Concerts";
import Enregistraments from "./body/enregistraments/Enregistraments";
import Contacte from "./body/contacte/Contacte";
import Historia from "./body/historia/Historia";

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
        secondary: {
            main: '#13BBB2',
        }
    },
});

function App() {
    const [currentTab, setCurrentTab] = useState('Dashboard');
    const [is75Aniversari, setIs75Aniversari] = useState(false);

    const changeTabHandler = (tabId) => {
        if (tabId === '75-aniversari') {
            setIs75Aniversari(true);
        } else if (tabId === 'Dashboard' || tabId === 'QuiSom' || tabId === 'HISTORIA' || tabId === 'DIRECTORS' ||
            tabId === 'CONCERTS' || tabId === 'ENREGISTRAMENTS' || tabId === 'CONTACTE') {
            setIs75Aniversari(false);
        }

        setCurrentTab(tabId)
    }

    return (
        <ThemeProvider theme={theme}>
            <div className="app-container">
                <NavBar onChangeTab={changeTabHandler} />
                {is75Aniversari && <NavBar75Aniversari onChangeTab={changeTabHandler} />}
                {currentTab === 'Dashboard' && <Dashboard />}
                {currentTab === 'QuiSom' && <QuiSom />}
                {currentTab === 'HISTÒRIA' && <Historia />}
                {currentTab === 'DIRECTORS' && <Directors />}
                {currentTab === 'CONCERTS' && <Concerts />}
                {currentTab === '75-aniversari' && <Concert75e />}
                {currentTab === 'Assajos' && <Assajos />}
                {currentTab === 'Repertori' && <Repertori />}
                {currentTab === 'Formulari' && <Formulari />}
                {currentTab === 'ENREGISTRAMENTS' && <Enregistraments />}
                {currentTab === 'CONTACTE' && <Contacte />}
            </div>
        </ThemeProvider>
    )
}

export default App;
