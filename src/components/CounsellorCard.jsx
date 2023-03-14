import Tag from "./Tag";
import { Link } from "react-router-dom";

import "../styles/CounsellorCard.css";

const CounsellorCard = ({
  avatarUrl,
  firstName,
  title,
  location,
  ratePerSession,
  areas,
  id,
}) => {
  return (
    <>
      <div className="counsellor-card">
        <img src={avatarUrl} alt="" />
        <h3>{firstName}</h3>
        <p>{location}</p>
        <h4>{title}</h4>
        <p>{ratePerSession}</p>
        <div className="tag-wrapper">
          {areas.map((area) => (
            <Tag>{area}</Tag>
          ))}
        </div>
        <Link to={id.toString()} preventScrollReset={true}>
          Visa Profil (new)
        </Link>
      </div>
    </>
  );
};

export default CounsellorCard;
