import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../contexts/ThemeContext";

const Navbar = () => {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <nav style={{ padding: "10px", display: "flex", justifyContent: "space-between" }}>
      <div>
        <Link to="/" style={{ margin: "0 10px" }}>Home</Link>
        <Link to="/about" style={{ margin: "0 10px" }}>About</Link>
        <Link to="/contact" style={{ margin: "0 10px" }}>Contact</Link>
        <Link to="/redux-example" style={{ margin: "0 10px" }}>Redux Example</Link>
        <Link to="/weather" style={{ margin: "0 10px" }}>Weather</Link>
      </div>
      <button onClick={toggleTheme} style={{ padding: "5px 10px" }}>Toggle Theme</button>
    </nav>
  );
};

export default Navbar;
