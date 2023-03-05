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
          <Link to="/about">About</Link>
          <Link to="/privacy">Privacy</Link>
          <Link to="/transparency">Transparency</Link>
          <Link to="/careers">Careers</Link>
          <Link to="/feedback">Feedback</Link>
          <Link to="/contact-us">Contact Us</Link>
        </section>
      </nav>
    </>
  );
};

export default BurgerMenu;
