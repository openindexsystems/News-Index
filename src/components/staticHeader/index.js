import React from "react";
import styles from './staticHeader.module.scss';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from "react-router-dom";

const StaticHeader = () => {
  return (
    <>
      <header className={styles.header}>
        <section className={styles.logo} >
          <Link href='/'>
          <section>Powered by</section>
          <section><sup>TM</sup></section>
          <section><img src='/images/logo/OISCLogo150.png' /></section>
          </Link>
        </section>
        <section className={styles['burger-menu']}>
          <MenuIcon />
        </section>
      </header>
    </>
  );
};

export default StaticHeader;