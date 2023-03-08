import Tag from "./Tag";

const CounsellorCard = ({
  showProfile,
  avatarUrl,
  firstName,
  title,
  location,
  ratePerHour,
  areas,
  id,
}) => {
  return (
    <>
      <img src={avatarUrl} alt="" />
      <h3>{firstName}</h3>
      <p>{location}</p>
      <h4>{title}</h4>
      <p>{ratePerHour}</p>
      {/*area tags container, remove inline style :) */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "4px" }}>
        {areas.map((area) => (
          <Tag>{area}</Tag>
        ))}
      </div>
      <button onClick={() => showProfile(id)}>Visa Profil</button>
    </>
  );
};

export default CounsellorCard;
