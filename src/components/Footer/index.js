import React from "react";
import styles from './Footer.module.scss';
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <section className={styles.links}>
          <Link href='#'>About</Link>
          <Link href='#'>Privacy</Link>
          <Link href='#'>Transparency</Link>
          <Link href='#'>Careers</Link>
          <Link href='#'>Feedback</Link>
          <Link href='#'>Contact Us</Link>
        </section>
        <section className={styles.copyright}>
          Copyright 2023 Open Index Systems LLC. All Rights Reserved.
        </section>
      </footer>
    </>
  );
};

export default Footer;