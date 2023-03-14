import { useState, useEffect } from "react";
import * as dummyData from "../data/dummyDataAPI";
import CounsellorCard from "../components/CounsellorCard";
import ModalWrapper from "../components/ModalWrapper";
import ProfileView from "../components/ProfileView";

import "../styles/CounsellorGallery.css";

const CounsellorGallery = () => {
  const [areasOptions, setAreasOptions] = useState(
    dummyData.getAllUniqueAreas()
  );
  const [filterAreas, setFilterAreas] = useState("");
  const [locationsOptions, setLocationsOptions] = useState(
    dummyData.getAllUniqueLocations()
  );
  const [filterLocations, setFilterLocations] = useState("");
  const [remoteOptionsOptions, setRemoteOptionsOptions] = useState(
    dummyData.getAllUniqueRemoteOptions()
  );
  const [filterRemoteOptions, setFilterRemoteOptions] = useState("");
  const [filterFreeText, setFilterFreeText] = useState("");
  const [galleryItems, setGalleryItems] = useState(dummyData.getGalleryItems());
  const [profileViewId, setProfileViewId] = useState();
  const [showProfileView, setShowProfileView] = useState(false);

  useEffect(() => {
    const areasArray = filterAreas ? [filterAreas] : [];
    const locationsArray = filterLocations ? [filterLocations] : [];
    const remoteOptionsArray = filterRemoteOptions ? [filterRemoteOptions] : [];

    setGalleryItems(
      dummyData.getGalleryItems({
        areas: areasArray,
        location: locationsArray,
        remoteOptions: remoteOptionsArray,
        freeText: filterFreeText,
      })
    );
  }, [filterAreas, filterLocations, filterRemoteOptions, filterFreeText]);

  const clearFilters = () => {
    setFilterAreas("");
    setFilterLocations("");
    setFilterRemoteOptions("");
    setFilterFreeText("");
  };

  const showProfile = (id = null) => {
    setProfileViewId(id);
    setShowProfileView(true);
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
          value={filterLocations}
          onChange={(e) => {
            setFilterLocations(e.target.value);
          }}
        >
          <option value="">Region</option>
          {locationsOptions.map((location, i) => (
            <option key={i} value={location}>
              {location}
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
        <select
          value={filterRemoteOptions}
          onChange={(e) => {
            setFilterRemoteOptions(e.target.value);
          }}
        >
          <option value="">I lokal/digitalt</option>
          {remoteOptionsOptions.map((remoteOption, i) => (
            <option key={i} value={remoteOption}>
              {remoteOption}
            </option>
          ))}
        </select>
        <button type="button" onClick={clearFilters}>
          Rensa alla filter
        </button>
      </form>

      <div className="counsellor-gallery-cards-wrapper">
        {galleryItems.map((item) => (
          <CounsellorCard key={item.id} showProfile={showProfile} {...item} />
        ))}
      </div>

      {showProfileView && (
        <ModalWrapper closeCb={() => setShowProfileView(false)}>
          <ProfileView
            closeCb={() => setShowProfileView(false)}
            item={dummyData.getProfileView(profileViewId)}
          />
        </ModalWrapper>
      )}
    </div>
  );
};

export default CounsellorGallery;
