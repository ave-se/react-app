import { useState, useEffect } from "react";
import * as dummyData from "../data/dummyDataAPI";
import CounsellorCard from "./CounsellorCard";

const CounsellorGallery = () => {
  const [languagesOptions, setLanguagesOptions] = useState(
    dummyData.getAllUniqueLanguages()
  );
  const [filterLanguages, setFilterLanguages] = useState("");

  const [areasOptions, setAreasOptions] = useState(
    dummyData.getAllUniqueAreas()
  );
  const [filterAreas, setFilterAreas] = useState("");

  const [filterFreeText, setFilterFreeText] = useState("");

  const [galleryItems, setGalleryItems] = useState(dummyData.getGalleryItems());

  const [profileViewId, setProfileViewId] = useState();
  const [showProfileView, setShowProfileView] = useState(false);

  useEffect(() => {
    const languageArray = filterLanguages ? [filterLanguages] : [];
    const areasArray = filterAreas ? [filterAreas] : [];

    setGalleryItems(
      dummyData.getGalleryItems({
        languages: languageArray,
        areas: areasArray,
        freeText: filterFreeText,
      })
    );

    //hide detailed view
    setShowProfileView(false);
  }, [filterLanguages, filterAreas, filterFreeText]);

  const clearFilters = () => {
    setFilterLanguages("");
    setFilterAreas("");
    setFilterFreeText("");
  };

  const showProfile = (id = null) => {
    setProfileViewId(id);
    setShowProfileView(true);
  };

  return (
    <>
      <h2>GALLERY!</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          placeholder="Sök..."
          value={filterFreeText}
          onChange={(e) => {
            setFilterFreeText(e.target.value);
          }}
        />
        <select
          value={filterLanguages}
          onChange={(e) => {
            setFilterLanguages(e.target.value);
          }}
        >
          <option value="">Språk</option>
          {languagesOptions.map((language, i) => (
            <option key={i} value={language}>
              {language}
            </option>
          ))}
        </select>
        <select
          value={filterAreas}
          onChange={(e) => {
            setFilterAreas(e.target.value);
          }}
        >
          <option value="">Specialområde</option>
          {areasOptions.map((area, i) => (
            <option key={i} value={area}>
              {area}
            </option>
          ))}
        </select>
        <button type="button" onClick={clearFilters}>
          Rensa filter
        </button>
      </form>

      {galleryItems.map((item) => (
        <CounsellorCard key={item.id} showProfile={showProfile} {...item} />
      ))}

      {/* debug */}
      {showProfileView ? (
        <div>
          {Object.entries(dummyData.getDetailedView(profileViewId)).map((v) => (
            <li>{v}</li>
          ))}
          <button onClick={() => setShowProfileView(false)}>CLOSE (X)</button>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default CounsellorGallery;
