import React from "react";
import { useState } from "react";
import styles from "./Home.module.scss";
import StaticHeader from "../staticHeader";
import Footer from "../Footer";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
      <div className="news-index">
        <StaticHeader />

        <form
          onSubmit={(e) => {
            e.preventDefault();
            console.log(searchQuery);
            window.location = `/search?q=${encodeURIComponent(searchQuery)}`;
          }}
        >
          <input
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
            }}
          />
          <button type="submit"> Submit</button>
        </form>

        <Footer />
      </div>
    </>
  );
};

export default Home;
