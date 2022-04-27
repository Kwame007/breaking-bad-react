import React from "react";
import logo from "../images/logo.png";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <>
      <header className={`${classes.header} ${props.className}`}>
        <img src={logo} alt="" />
      </header>
    </>
  );
};

export default Header;
