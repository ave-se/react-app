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
          <option value="" selected>
            Språk
          </option>
          {languagesOptions.map((language) => (
            <option value={language}>{language}</option>
          ))}
        </select>
        <select
          value={filterAreas}
          onChange={(e) => {
            setFilterAreas(e.target.value);
          }}
        >
          <option value="" selected>
            Specialområde
          </option>
          {areasOptions.map((area) => (
            <option value={area}>{area}</option>
          ))}
        </select>
      </form>

      {galleryItems.map((item) => (
        <CounsellorCard {...item} />
      ))}
    </>
  );
};

export default CounsellorGallery;
