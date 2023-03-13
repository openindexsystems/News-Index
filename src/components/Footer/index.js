import React from "react";
import styles from './Footer.module.scss';
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>

        <section className={styles.socials}>
          <section className={styles.label}>
            Follow us on
          </section>
          <section className={styles.list}>
            <Link to='/'>
              <img src='/images/social/social_twitter.png' />
            </Link>
            <Link to='/'>
              <img src='/images/social/social_facebook.png' />
            </Link>
            <Link to='/'>
              <img src='/images/social/social_instagram.png' />
            </Link>
            <Link to='/'>
              <img src='/images/social/social_rumble.png' />
            </Link>
            <Link to='/'>
              <img src='/images/social/social_truthsocial.png' />
            </Link>
            <Link to='/'>
              <img src='/images/social/social_parler.png' />
            </Link>
            <Link to='/'>
              <img src='/images/social/social_publicsq.png' />
            </Link>
            <Link to='/'>
              <img src='/images/social/social_l.png' />
            </Link>
          </section>
        </section>

        <section className={`${styles["links"]} ${styles["web-only"]}`}>
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