import "../styles/Homepage.css";
import navIconLeft from "../assets/nav-icon-left.svg";
import navIconRight from "../assets/nav-icon-right.svg";

function Homepage() {
  return (
    <div className="homepage">
      <div className="hero">
        <img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="Hero Image" />
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

