import {CssBaseline, ThemeProvider} from "@mui/material";
import {ColorModeContext, useMode} from "./theme";
import {Topbar} from "./views/global/topbar";

function App() {
    const [theme, colorMode] = useMode()

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                    <div className="App">
                        <Topbar/>
                    </div>
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}

export default App;
