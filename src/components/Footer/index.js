import React from "react";
import styles from './Footer.module.scss';
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <section className={styles.links}>
          <Link to='/about'>About</Link>
          <Link to='/privacy'>Privacy</Link>
          <Link to='/transparency'>Transparency</Link>
          <Link to='/careers'>Careers</Link>
          <Link to='/feedback'>Feedback</Link>
          <Link to='/contact-us'>Contact Us</Link>
        </section>
        <section className={styles.copyright}>
          Copyright 2023 Open Index Systems LLC. All Rights Reserved.
        </section>
      </footer>
    </>
  );
};

export default Footer;