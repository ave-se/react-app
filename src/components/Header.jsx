import "../styles/Header.css";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header id="header" style={{ padding: "16px" }}>
      <Link to={""}>HOME (Should probably be "the logo")</Link>
      <p>—</p>
      <nav>
        <ul>
          <li>
            <NavLink to={"about"}>Vad handledning är</NavLink>
          </li>
          <li>
            <NavLink to={"contact"}>Kontakta oss</NavLink>
          </li>
          <li>
            <NavLink to={"gallery"}>Sök handledare</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;