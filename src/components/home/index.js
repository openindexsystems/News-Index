import React from "react";
import { useState } from "react";
import styles from "./Home.module.scss";
import StaticHeader from "../staticHeader";
import Footer from "../Footer";
import SearchIcon from '@mui/icons-material/Search';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
      <main>
        <div className={styles["news-index"]}>
          <section>
            <StaticHeader />
          </section>

          <section className={styles["search-form"]}>
            <section>
              <img src="/images/assets/newsindex.png" />
            </section>

            <section className={styles["input-field"]}>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  console.log(searchQuery);
                  window.location = `/search?q=${encodeURIComponent(
                    searchQuery
                  )}`;
                }}
              >
                <input
                  type="text"
                  placeholder="Search"
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                  }}
                />
                <button type="submit"><SearchIcon style={{color: '#FFFFFF'}} fontSize='inherit' /></button>
              </form>
            </section>

            <section className={styles.slogan}>Real News. Real Fast</section>
          </section>

          <section className={styles.footer}>
            <Footer />
          </section>
        </div>
      </main>
    </>
  );
};

export default Home;
