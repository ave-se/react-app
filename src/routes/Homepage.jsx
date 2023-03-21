import "../styles/Homepage.css";
import navIconLeft from "../assets/nav-icon-left.svg";
import navIconRight from "../assets/nav-icon-right.svg";

function Homepage() {
  return (
    <div className="homepage">
      <div className="hero">
        <img src="https://source.unsplash.com/random/503x500?professional?portrait" alt="Hero Image" />
        <div className="hero-nav">
          <img src={navIconLeft} alt="Left Nav" className="left-nav" />
          <img src={navIconRight} alt="Right Nav" className="right-nav" />
        </div>
        <div className="hero-text">
          <h1>Hitta handledare över hela Sverige</h1>
        </div>
      </div>
    </div>
  );
};


export default Homepage;

