import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Topbar from "../src/scenes/global/TopBar";
// import SideBar from "./scenes/global/SideBar";
import Sidebar from "./scenes/global/SideBar";
import Dashboard from "./scenes/dashboard";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Team from "./scenes/team/index";
// import Invoices from "./scenes/invoices";
import Contacts from "./scenes/contacts";
// import Bar from "./scenes/bar";
// import Form from "./scenes/form";
// import Line from "./scenes/line";
// import Pie from "./scenes/Pie";
// import FAQ from "./scenes/faq";
// import Calender from "./scenes/calender";
// import Geography from "./scenes/geography";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team/>}/> 
              <Route path="/contacts" element={<Contacts/>}/>
              {/* <Route path="/invoices" element={<Invoices/>}/> */}
              {/* <Route path="/form" element={<Form/>}/> */}
              {/* <Route path="/bar" element={<Bar/>}/> */}
              {/* <Route path="/pie" element={<Pie/>}/> */}
              {/* <Route path="/line" element={<Line/>}/> */}
              {/* <Route path="/faq" element={<FAQ/>}/> */}
              {/* <Route path="/geography" element={<Geography/>}/> */}
              {/* <Route path="/calender" element={<Calender/>}/> */}
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
