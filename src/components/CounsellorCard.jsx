import Tag from "./Tag";
import { Link } from "react-router-dom";

import "../styles/CounsellorCard.css";
import markerPin from "../assets/marker-pin.svg";

const CounsellorCard = ({
  avatarUrl,
  firstName,
  title,
  location,
  ratePerSession,
  areas,
  id,
  elevatorPitch,
}) => {
  return (
    <>
      <div className="counsellor-card">
        <img src={avatarUrl} alt="" />
        <div className="cols-2">
          <p className="name">{firstName}</p>

          <div className="icon-with-text">
            <img src={markerPin} alt=""></img>
            <p className="location">{location}</p>
          </div>
        </div>
        <div className="cols-2">
          <p className="title">{title}</p>
          <p className="price">{ratePerSession}&nbsp;kr/tim</p>
        </div>

        <div className="tags">
          {areas.map((area) => (
            <Tag>{area}</Tag>
          ))}
        </div>

        <div className="info-preview">{elevatorPitch}</div>

        <Link
          className="profile-link"
          to={id.toString()}
          preventScrollReset={true}
        >
          Visa Profil
        </Link>
      </div>
    </>
  );
};

export default CounsellorCard;
