import "../styles/Homepage.css";
const Homepage = () => {
  return <h2>"Homepage"</h2>;
};

function HomePage() {
  return (
    <div className="container">
      <div className="hero-image">
        <img src="path/to/hero/image.jpg" alt="Hero Image" />
        <div className="text-overlay">
          <h1>Hitta handledare över hela Sverige</h1>
        </div>
      </div>
    </div>
  );
}


export default Homepage;
