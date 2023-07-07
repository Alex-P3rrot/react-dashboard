import {CssBaseline, ThemeProvider} from "@mui/material";
import {ColorModeContext, useMode} from "./theme";
import {Topbar} from "./views/global/Topbar";
import {SidebarApp} from "./views/global/SidebarApp";
import {Route, Routes} from "react-router-dom";
import {UserTable} from "./views/users/UserTable";
import {Dashboard} from "./views/Dashboard";
import {Calendar} from "./views/Calendar";
import {Pie} from "./views/charts/Pie";
import {Line} from "./views/charts/Line";
import {Bar} from "./views/charts/Bar";
import {Geo} from "./views/charts/Geo";

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
                            <Route path="/calendar" element={<Calendar/>}/>
                            <Route path="/chart/pie" element={<Pie/>}/>
                            <Route path="/chart/line" element={<Line/>}/>
                            <Route path="/chart/Bar" element={<Bar/>}/>
                            <Route path="/chart/Geo" element={<Geo/>}/>
                        </Routes>
                    </main>
                </div>
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}

export default App;
