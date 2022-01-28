import React from "react";
// import classes from "./Navbar.module.css";

// import { Layout, Menu } from "antd";
import {
  // Button,
  // Navbar as navbar,
  // Container,
  Nav,
  // NavItem,
  // NavDropdown,
  // MenuItem,
} from "react-bootstrap";

// import img from "../../static/dictionary.png";

const Navbar = () => {
  return (
    <Nav className="navbar navbar-expand-lg  navbar-light navbar-default navbar-fixed-top">
      {/* <img src={img} alt="logo" className={classes.img} /> */}
      <button
        className="navbar-toggler bg-light"
        type="button"
        data-toggle="collapse"
        data-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
    </Nav>
  );
};

export default Navbar;
