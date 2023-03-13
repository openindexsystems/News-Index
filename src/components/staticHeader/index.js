import React from "react";
import styles from "./staticHeader.module.scss";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import BurgerMenu from "../burgerMenu";
import { Link } from "react-router-dom";
import { useState } from "react";

const StaticHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <header className={styles.header}>
        <section className={styles.logo}>
          <Link to="/">
            <section>Powered by</section>
            <section>
              <img src="/images/logo/OISCLogo150.png" />
            </section>
            <section>
              <sup>TM</sup>
            </section>
          </Link>
        </section>
        <section className={styles["burger-menu"]}>
          <span
            style={{ cursor: "pointer" }}
            onClick={() => {
              setMenuOpen(!menuOpen);
            }}
          >
            {!menuOpen && (
              <>
                <MenuIcon />
              </>
            )}
          </span>
        </section>
      </header>

      {menuOpen && (
        <>
          <div className={styles.mask} onClick={() => {
            setMenuOpen(false)
          }}></div>
          <BurgerMenu />
          <span
            style={{
              cursor: "pointer",
              position: "absolute",
              top: "30px",
              right: "30px",
              zIndex: '2',
            }}
            onClick={() => {
              setMenuOpen(false);
            }}
          >
            <CloseIcon />
          </span>
        </>
      )}
    </>
  );
};

export default StaticHeader;
