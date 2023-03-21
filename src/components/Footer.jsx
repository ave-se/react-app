import "../styles/Footer.css";

import logo from "../assets/logo.svg";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer-left-section">
        <img src={logo} alt="" />
        <p>Gatunummer XX</p>
        <p>XXX XX Stad</p>
        <p>Verksamhetsinfo</p>
      </div>
      <div className="footer-right-section">
        <div className="footer-columns">
          <div className="footer-right-section-column-1">
            <p>Text field</p>
            <p>Text field</p>
            <p>Text field</p>
          </div>
          <div className="footer-right-section-column-2">
            <p>Text field</p>
            <p>Text field</p>
            <p>Text field</p>
          </div>
        </div>
        <ul>
          <li>Hem</li>
          <li>Integritetspolicy</li>
          <li>Kontakta oss</li>
        </ul>
      </div>
      <div className="footer-blank-space"></div>
    </footer>
  );
};

export default Footer;
