import "../styles/Contact.css"

import contactIllustrationLeft from "../assets/contact-illustration-left.svg";
import contactIllustrationMiddle from "../assets/contact-illustration-middle.svg";
import contactIllustrationRight from "../assets/contact-illustration-right.svg";

const Contact = () => {
  return (
    <div>
      <div className="contact-cards-wrapper">
        <div className="contact-card item-a">
          <img 
          src={contactIllustrationLeft} 
          alt="Illustration of a person searching for a counsellor with a magnifying glass" 
          />
          <h2>Vilka är vi?</h2>
        </div>
        <div className="contact-card item-b">
          <img 
          src={contactIllustrationMiddle} 
          alt="Illustration of a person sitting on the floor with a laptop on their 
          lap with chat bubbles next to their head" 
          />
          <h2>Vad är <br/>handledning.se?</h2>
        </div>
        <div className="contact-card item-c">
          <img 
          src={contactIllustrationRight} 
          alt="Illustration of a counsellor and a patient takling in an office" 
          />
          <h2>Vi kan hjälpa dig med <br/>att hitta handledare</h2>
        </div>
      </div>
      <div className="contact-links-wrapper">
        <div className="contact-link">
          <p className="bold">Är du handledare och vill vara med på hemsidan?</p>
          <a href="">Till registrera</a>
        </div>
        <div className="contact-link">
          <p className="bold">Emaila din handledare!</p>
          <a href="">Till formuläret</a>
        </div>
        <div className="contact-link">
          <p className="bold">Ring oss om frågor!</p>
          <a href="">Mer om kontakt</a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
