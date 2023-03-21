import Tag from "./Tag";
import { Link, useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

  const profileUrl = id.toString();

  return (
    <>
      <div className="counsellor-card" onClick={() => navigate(profileUrl)}>
        <div className="avatar-container">
          <img src={avatarUrl} alt="" />
        </div>

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

        <Link className="profile-link" to={profileUrl}>
          Visa Profil
        </Link>
      </div>
    </>
  );
};

export default CounsellorCard;
