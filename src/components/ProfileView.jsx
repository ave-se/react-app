import { Link, useParams, useNavigate } from "react-router-dom";
import * as dummyData from "../data/dummyDataAPI";
import ScrollToTop from "../helpers/ScrollToTop";
import Tag from "./Tag";

const ProfileView = () => {
  const { profileId } = useParams();
  const navigate = useNavigate();

  const { areas, avatarUrl, ...item } = dummyData.getProfileView(
    Number(profileId)
  );

  //TODO: item should probably be properly destructured...

  return (
    <>
      <ScrollToTop />
      <div>
        <Link
          to=".."
          relative="path"
          onClick={(e) => {
            e.preventDefault();
            navigate(-1);
          }}
        >
          {"<<< BACK!"}
        </Link>
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
      </div>
    </>
  );
};

export default ProfileView;
