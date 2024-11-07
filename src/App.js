import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/Global.css";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import NavMenu from "./components/NavMenu";
import Services from "./pages/Services";
import { Box } from "@chakra-ui/react";

function App() {
  return (
    <Box>
      <Router>
        <NavMenu />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<AboutMe />}></Route>
          <Route path="/services" element={<Services />}></Route>
        </Routes>
      </Router>
    </Box>
  );
}

export default App;
