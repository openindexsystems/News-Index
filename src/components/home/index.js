import React from "react";
import { useState } from "react";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <>
      <div className="news-index">
        <div>
          <div>
            <h3>Open</h3>
            <p>Index Systems</p>
            <>
              initial load
            </>

            <br />

            <form onSubmit={e => {
              e.preventDefault();
              console.log(searchQuery);
              window.location = `/search?q=${encodeURIComponent(searchQuery)}`;
            }}>
            <input placeholder="Search" value={searchQuery} onChange={e => {
              setSearchQuery(e.target.value)
            }}/>
            <button type="submit"> Submit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;