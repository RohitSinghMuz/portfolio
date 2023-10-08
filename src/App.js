import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Pages/Home/Navbar";
import Home from "./Pages/Home/Homescreen";
import Box from "@mui/material/Box";
const App = () => {
  return (
    <Box className="App">
      <Router>
        <Box>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="*" element={<Box>404 Not Found</Box>}></Route>
          </Routes>
        </Box>
      </Router>
    </Box>
  );
};

export default App;
