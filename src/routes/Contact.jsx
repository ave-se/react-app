import "../styles/Contact.css"
import { Link } from "react-router-dom";

import contactIllustrationLeft from "../assets/contact-illustration-left.svg";
import contactIllustrationMiddle from "../assets/contact-illustration-middle.svg";
import contactIllustrationRight from "../assets/contact-illustration-right.svg";

const Contact = () => {
  return (
    <div>
      <div className="contact-cards-wrapper">
        <div className="contact-card item-a">
          <Link to="/about">
            <img 
              src={contactIllustrationLeft} 
              alt="Illustration of a person searching for a counsellor with a magnifying glass" 
            />
            <h2>Vilka är vi?</h2>
          </Link>
        </div>
        <div className="contact-card item-b">
          <Link to="/about">
            <img 
              src={contactIllustrationMiddle} 
              alt="Illustration of a person sitting on the floor with a laptop on their 
              lap with chat bubbles next to their head" 
            />
            <h2>Vad är <br/>handledning.se?</h2>
          </Link>
        </div>
        <div className="contact-card item-c">
          <Link to="/gallery">
            <img 
              src={contactIllustrationRight} 
              alt="Illustration of a counsellor and a patient takling in an office" 
            />
            <h2>Vi kan hjälpa dig med <br/>att hitta handledare</h2>
          </Link>
        </div>
      </div>
      <div className="contact-links-wrapper">
        <div className="contact-bubble">
          <p className="bold">Är du handledare och vill vara med på hemsidan?</p>
          <Link to={""}>Till registrera</Link>
        </div>
        <div className="contact-bubble">
          <p className="bold">Emaila din handledare!</p>
          <Link to={""}>Till formuläret</Link>
        </div>
        <div className="contact-bubble">
          <p className="bold">Ring oss om frågor!</p>
          <Link to={""}>Mer om kontakt</Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
