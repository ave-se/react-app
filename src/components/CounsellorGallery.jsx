import { useState, useEffect } from "react";
import * as dummyData from "../data/dummyDataAPI";

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

  const [galleryItems, setGalleryItems] = useState(dummyData.getListView());

  useEffect(() => {
    const languageArray = filterLanguages ? [filterLanguages] : [];
    const areasArray = filterAreas ? [filterAreas] : [];

    setGalleryItems(
      dummyData.getListView({
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

      {/* temporary gallery list  */}
      <ul>
        {galleryItems.map((item) => (
          <li>
            {item.firstName} {item.lastName}
          </li>
        ))}
      </ul>
    </>
  );
};

export default CounsellorGallery;
