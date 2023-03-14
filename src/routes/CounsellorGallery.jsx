import { useState, useEffect } from "react";
import * as dummyData from "../data/dummyDataAPI";
import CounsellorCard from "../components/CounsellorCard";

import "../styles/CounsellorGallery.css";

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
  }, [filterLanguages, filterAreas, filterFreeText]);

  const clearFilters = () => {
    setFilterLanguages("");
    setFilterAreas("");
    setFilterFreeText("");
  };

  return (
    <div className="counsellor-gallery-wrapper">
      <h2>Hitta handledare över hela Sverige!</h2>
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

      <div className="counsellor-gallery-cards-wrapper">
        {galleryItems.map((item) => (
          <CounsellorCard key={item.id} showProfile={showProfile} {...item} />
        ))}
      </div>
    </div>
  );
};

export default CounsellorGallery;
