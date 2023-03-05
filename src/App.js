import './App.css';
import Dashboard from "./dashboard/Dashboard";
import NavBar from "./nav-bar/NavBar";
import { createTheme } from '@material-ui/core/styles';
import {ThemeProvider} from "@mui/material/styles";

// TODO
// - App Bar

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
      main: '#105C77',
    },
  },
});

function App() {
  return (
      <ThemeProvider theme={theme}>
        <div className="app-container">
          <NavBar></NavBar>
          <Dashboard></Dashboard>
        </div>
      </ThemeProvider>
  )
}

export default App;
