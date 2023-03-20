import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

import "../styles/Root.css";

function Root() {
  return (
    <>
      <Header />

      <div id="wrapper">
        <div id="content-wrapper">
          <div id="content-wrapper--max-width">
            <div id="content">
              <Outlet />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Root;
