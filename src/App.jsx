import "./App.css";
import Header from "./components/Header";
import { useState } from "react";
import { Outlet } from "react-router-dom";

function App() {
  const [currentPage, setCurrentPage] = useState(""); //about | contact | gallery

  let pageComponent;
  switch (currentPage) {
    case "about": {
      pageComponent = <About />;
      break;
    }
    case "contact": {
      pageComponent = <Contact />;
      break;
    }
    case "gallery": {
      pageComponent = <CounsellorGallery />;
      break;
    }
  }

  return (
    <>
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <Outlet />
    </>
  );
}

export default App;
