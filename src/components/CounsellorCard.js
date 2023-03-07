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
      <p>{areas}</p>
      <button onClick={() => showProfile(id)}>Visa Profil</button>
    </>
  );
};

export default CounsellorCard;
