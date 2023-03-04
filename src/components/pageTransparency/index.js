import React from "react";
import StaticHeader from "../staticHeader";
import Footer from "../Footer";

const pageTransparency = () => {

  return (
    <>
      <main>
        <div>
          <section>
            <StaticHeader />
          </section>

          <section>
            Coming soon
          </section>

          <section>
            <Footer />
          </section>
        </div>
      </main>
    </>
  );
};

export default pageTransparency;
