import "../styles/Header.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header id="header" style={{ padding: "16px" }}>
      <nav>
        <ul>
          <li>
            <NavLink to={`home`}>
              Homepage (TEMPORARY, should be "default" route)
            </NavLink>
          </li>
          <li>
            <NavLink to={`about`}>Vad handledning är</NavLink>
          </li>
          <li>
            <NavLink to={`contact`}>Kontakta oss</NavLink>
          </li>
          <li>
            <NavLink to={`gallery`}>Sök handledare</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
