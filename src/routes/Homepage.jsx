import "../styles/Homepage.css";
import navIconLeft from "../assets/nav-icon-left.svg";
import navIconRight from "../assets/nav-icon-right.svg";

function Homepage() {
  return (
    <div className="homepage">
      <div className="hero">
        <img
          src="https://images.unsplash.com/photo-1615461065624-21b562ee5566?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1640&q=80"
          alt="Hero Image"
        />
        <div className="hero-nav">
          <img src={navIconLeft} alt="Left Nav" className="left-nav" />
          <img src={navIconRight} alt="Right Nav" className="right-nav" />
        </div>
        <div className="hero-text">
          <h1>Hitta handledare över hela Sverige</h1>
        </div>
      </div>

      <div className="lasMer">
        <h2>
          Läs mer om vad handledning är och varför det ger utveckling. I vår
          handledarförteckning hittar ni enkelt er nästa handledare.
        </h2>
      </div>

      <div className="stats-container">
        <div className="fiftyThree">
          <h2>53</h2>
          <p>Registrerade Handledare att välja mellan</p>
        </div>

        <div className="oneHundred">
          <h2>100%</h2>
          <p>Av Svergies olika län</p>
        </div>
      </div>

      <div className="secondImage">
        <div style={{ position: "relative" }}>
          <img
            src="https://images.unsplash.com/photo-1622227922682-56c92e523e58?ixlib=rb-4.0.3&ixid=MnwxMj..."
            alt="Second Image"
          />
          <div className="secondImageText">
            <p style={{ fontStyle: "italic" }}>
              “Handledning är en självklar kvalitetssäkring för vårt arbete och
              ger oss samtidigt inspiration och möjligheter till personlig
              utveckling.” Anna, Enhetschef
            </p>
          </div>
        </div>
      </div>

      <div className="green-box-container">
        <div className="green-box">
          <a href="#">Sök efter handledare som passar just dina behov!</a>
        </div>

        <div className="green-box">
          <a href="#">
            Hitta mer information om vad Handledning är, och varför det passar
            just dig
          </a>
        </div>

        <div className="green-box">
          <a href="#">Är du handledare och vill medverka på sidan?</a>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
