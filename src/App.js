import {CssBaseline, ThemeProvider} from "@mui/material";
import {ColorModeContext, useMode} from "./theme";
import {Topbar} from "./views/global/Topbar";
import {SidebarApp} from "./views/global/SidebarApp";
import {Route, Routes} from "react-router-dom";
import {UserTable} from "./views/users/UserTable";
import {Dashboard} from "./views/Dashboard";

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
                        <Routes>
                            <Route path="/" element={<Dashboard/>}/>
                            <Route path="/setting/users" element={<UserTable/>}/>
                        </Routes>
                    </main>
                </div>
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}

export default App;
