import Topbar from "./scenes/global/Topbar";
import Sidebar1 from "./scenes/global/Sidebar";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes,Route } from "react-router-dom";
import Dashboard from "./scenes/dashboard";
 import Team from "./scenes/team";
 import Invoices from "../src/scenes/invoice/index";
 import Contacts from "./scenes/contacts";
import Bar from "./scenes/bar";
import Form from "./scenes/form";
import Line from "./scenes/line";
import Pie from "./scenes/pie";
import Geography from "./scenes/geography";
import FAQ from "./scenes/faq";
// import Calender from "./scenes/calender";


function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
        <Sidebar1 />

          <main className="content">
            <Topbar  />
           <Routes>
            <Route path="/" element={<Dashboard/>} />
            <Route path="/team" element={<Team/>}/>
            <Route path="/contacts" element={<Contacts/>}/>
            <Route path="/invoices" element={<Invoices/>}/>
            <Route path="/form" element={<Form/>}/>
            <Route path="/bar" element={<Bar/>}/>
            <Route path="/line" element={<Line/>}/>
            <Route path="/pie" element={<Pie/>}/>
            <Route path="/geography" element={<Geography/>}/>
            <Route path="/faq" element={<FAQ/>}/>

          </Routes>

          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
