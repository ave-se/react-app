import Header from "../components/Header";
import { Outlet } from "react-router-dom";

import "../styles/Root.css";

function Root() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default Root;
