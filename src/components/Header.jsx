import "../styles/Header.css";

const Header = ({ currentPage, setCurrentPage }) => {
  return (
    <div style={{ padding: "16px" }}>
      <h2>Nav:</h2>
      <div style={{ display: "flex", gap: "8px" }}>
        <button
          class={currentPage === "about" && "header-selected"}
          type="button"
          onClick={() => setCurrentPage("about")}
        >
          Vad handledning är
        </button>
        <button
          class={currentPage === "contact" && "header-selected"}
          type="button"
          onClick={() => setCurrentPage("contact")}
        >
          Kontakta oss
        </button>
        <button
          class={currentPage === "gallery" && "header-selected"}
          type="button"
          onClick={() => setCurrentPage("gallery")}
        >
          Sök handledare
        </button>
      </div>
    </div>
  );
};

export default Header;
