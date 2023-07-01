import {CssBaseline, ThemeProvider} from "@mui/material";
import {ColorModeContext, useMode} from "./theme";
import {Topbar} from "./views/global/Topbar";
import {SidebarApp} from "./views/global/SidebarApp";

function App() {
    const [theme, colorMode] = useMode()

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                    <div id="app">
                        <SidebarApp/>
                        <main id="content">
                            <Topbar/>
                        </main>
                    </div>
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}

export default App;
