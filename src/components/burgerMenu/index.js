import React from "react";
import styles from "./burgerMenu.module.scss";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { useState } from "react";

const BurgerMenu = () => {
  return (
    <>
      <nav className={styles.nav}>
        <section className={styles.links}>
          <Link to="/about">About Us</Link>
          <Link to="/privacy">Privacy</Link>
          <Link to="/transparency">Transparency</Link>
          <Link to="/careers">Careers</Link>
          <Link to="/feedback">Feedback</Link>
          <Link to="/contact-us">Contact Us</Link>
          <span className={styles.logo}>
            <span>We're building</span>
            <img src="/images/logo/OISCLogo150.png" />
            <span><sup>TM</sup></span>
          </span>
          <Link to="#">Search Index</Link>
          <Link to="#">News Index</Link>
          <Link to="#">Video Index</Link>
          <Link to="#">Encyclodex</Link>
          <Link to="#">More</Link>
        </section>
      </nav>
    </>
  );
};

export default BurgerMenu;
