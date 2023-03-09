import Tag from "./Tag";

const ProfileView = ({ closeCb, item }) => {
  const { areas, avatarUrl } = item;

  //TODO: item should probably be destructured...

  return (
    <div
      onClick={(e) => e.stopPropagation()}
      style={{ backgroundColor: "white", padding: "24px" }}
    >
      <img src={avatarUrl} alt="" />

      <div style={{ display: "flex", flexWrap: "wrap", gap: "4px" }}>
        {areas.map((area) => (
          <Tag>{area}</Tag>
        ))}
      </div>

      <h2>RAW DATA (DEBUG): </h2>
      {Object.entries(item).map((v) => (
        <li>{v}</li>
      ))}
      <button onClick={closeCb}>CLOSE (X)</button>
    </div>
  );
};

export default ProfileView;
