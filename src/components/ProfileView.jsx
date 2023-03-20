import { Link, useNavigate, useLoaderData } from "react-router-dom";
import * as dummyData from "../data/dummyDataAPI";
import ScrollToTop from "../helpers/ScrollToTop";
import Tag from "./Tag";

export async function loader({ params }) {
  const profile = await dummyData.getProfileView(Number(params.profileId));
  return { profile };
}

const ProfileView = () => {
  const { profile } = useLoaderData();
  const navigate = useNavigate();

  const {
    elevatorPitch,
    aboutMe,
    occupationalBackground,
    methods,
    personality,
    areas,
    avatarUrl,
    ...item
  } = profile;
  //TODO: item should probably be properly destructured...

  return (
    <>
      <ScrollToTop />
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
      <div>
        <h3 className="all-caps">Sammanfattning</h3>
        <p>{elevatorPitch}</p>
        <h4 className="all-caps">Om mig</h4>
        <p>{aboutMe}</p>
        <h4 className="all-caps">Yrkesbakgrund</h4>
        <p>{occupationalBackground}</p>
        <h4 className="all-caps">Metoder, Struktur och Tillvägagångssätt</h4>
        <p>{methods}</p>
        <h4 className="all-caps">Hur kan jag upplevas som handledare?</h4>
        <p>{personality}</p>

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
