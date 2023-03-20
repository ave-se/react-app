import "../styles/Homepage.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

function HomePage() {
  const unsplashUrl = 'https://source.unsplash.com/random/1512x608';

  return (
    <div className="container position-relative">
      <img
        src={unsplashUrl}
        alt="Hero"
        className="w-100"
      />
      <div className="position-absolute w-100 h-100 d-flex align-items-center justify-content-between">
        <button className="btn btn-link text-white">
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <button className="btn btn-link text-white">
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </div>
  );
}

export default HomePage;
