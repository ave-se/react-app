import "../styles/Header.css";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header id="header">
      <Link to={""}>LOGO!</Link>
      <nav>
        <ul>
          <li>
            <NavLink to={"about"}>Vad handledning är</NavLink>
          </li>
          <li>
            <NavLink to={"contact"}>Kontakta oss</NavLink>
          </li>
          <li>
            <NavLink to={"gallery"} className="button">
              Sök handledare
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
