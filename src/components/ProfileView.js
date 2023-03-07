const ProfileView = ({ closeCb, item }) => {
  //TODO: item should probably be destructured...

  return (
    <div
      onClick={(e) => e.stopPropagation()}
      style={{ backgroundColor: "white", padding: "24px" }}
    >
      <img src={item.avatarUrl} alt="" />
      {Object.entries(item).map((v) => (
        <li>{v}</li>
      ))}
      <button onClick={closeCb}>CLOSE (X)</button>
    </div>
  );
};

export default ProfileView;
