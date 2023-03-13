import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact";
import CounsellorGallery from "./components/CounsellorGallery";
import { useState } from "react";

function App() {
  const [currentPage, setCurrentPage] = useState("about"); //about | contact | gallery

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
      {pageComponent}
    </>
  );
}

export default App;
