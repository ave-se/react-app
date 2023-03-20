import "../styles/ProfileView.css";
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
    firstName,
    title,
    location,
    remoteOptions,
    ratePerSession,
    avatarUrl,
  } = profile;

  return (
    <>
      <ScrollToTop />

      <div className="ProfileView__columns">
        <div className="ProfileView__columns__left">
          <img src={avatarUrl} alt={`Profilbild: ${firstName}`} />
          <h2>{firstName}</h2>
          <p className="title">{title}</p>
          <p>
            Stad: <span className="value">{location}</span>
          </p>
          <p>
            Format: <span className="value">{remoteOptions.join(" och ")}</span>
          </p>
          <p>
            Pris: <span className="value">{ratePerSession} kr/timme</span>
          </p>
          <div>
            <a className="button all-caps">Kontakta mig</a>
          </div>
        </div>
        <div>
          <div className="ProfileView__block">
            <h3 className="all-caps">Sammanfattning</h3>
            <p className="bold">{elevatorPitch}</p>
          </div>

          <div className="ProfileView__block ProfileView__tags-container">
            {areas.map((area) => (
              <Tag>{area}</Tag>
            ))}
          </div>

          <div className="ProfileView__block">
            <h4 className="all-caps">Om mig</h4>
            <p>{aboutMe}</p>
          </div>
          <div className="ProfileView__block">
            <h4 className="all-caps">Yrkesbakgrund</h4>
            <p>{occupationalBackground}</p>
          </div>
          <div className="ProfileView__block">
            <h4 className="all-caps">
              Metoder, Struktur och Tillvägagångssätt
            </h4>
            <p>{methods}</p>
          </div>
          <div className="ProfileView__block">
            <h4 className="all-caps">Hur kan jag upplevas som handledare?</h4>
            <p>{personality}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileView;
