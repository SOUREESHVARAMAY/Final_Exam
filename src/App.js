import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ReduxExample from "./pages/ReduxExample";
import WeatherApp from "./pages/WeatherApp";

const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about/*" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/redux-example" element={<ReduxExample />} />
          <Route path="/weather" element={<WeatherApp />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
