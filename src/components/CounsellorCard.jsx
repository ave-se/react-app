import Tag from "./Tag";

import "../styles/CounsellorCard.css";

const CounsellorCard = ({
  showProfile,
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
				<button onClick={() => showProfile(id)}>Visa Profil</button>
			</div>
		</>
  );
};

export default CounsellorCard;
