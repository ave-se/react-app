import { useState, useEffect } from "react";
import * as dummyData from "../data/dummyDataAPI";
import CounsellorCard from "../components/CounsellorCard";
import Select from "../components/Select";

import {
  Form,
  useLoaderData,
  useSubmit,
  useNavigate,
  Link,
} from "react-router-dom";

import "../styles/CounsellorGallery.css";

import iconSearch from "../assets/icon_search.svg";
import galleryIllustration from "../assets/gallery-illustration.svg";

export async function loader({ request }) {
  const makeSearchArray = (param) => {
    //the api expects an array. Null or empty string should return empty array
    if (!param || param === "") return [];

    return [param];
  };

  const url = new URL(request.url);

  const searchParams = {
    filterFreeText: url.searchParams.get("filterFreeText"),
    filterAreas: url.searchParams.get("filterAreas"),
    filterLocations: url.searchParams.get("filterLocations"),
    filterRemoteOptions: url.searchParams.get("filterRemoteOptions"),
  };

  const galleryItems = await dummyData.getGalleryItems({
    freeText: searchParams.filterFreeText,
    areas: makeSearchArray(searchParams.filterAreas),
    location: makeSearchArray(searchParams.filterLocations),
    remoteOptions: makeSearchArray(searchParams.filterRemoteOptions),
  });

  const areasOptions = await dummyData.getAllUniqueAreas();
  const locationsOptions = await dummyData.getAllUniqueLocations();
  const remoteOptionsOptions = await dummyData.getAllUniqueRemoteOptions();

  return {
    galleryItems,
    searchParams,
    areasOptions,
    locationsOptions,
    remoteOptionsOptions,
  };
}

const CounsellorGallery = () => {
  const {
    galleryItems,
    searchParams,
    areasOptions,
    locationsOptions,
    remoteOptionsOptions,
  } = useLoaderData();

  const submit = useSubmit();
  const navigate = useNavigate();

  const [searchIsActive, setSearchIsActive] = useState(false);

  const [filterFreeText, setFilterFreeText] = useState("");
  const [filterLocations, setFilterLocations] = useState("");
  const [filterAreas, setFilterAreas] = useState("");
  const [filterRemoteOptions, setFilterRemoteOptions] = useState("");

  //syncing state from URL searchParams
  useEffect(() => {
    setFilterFreeText(searchParams.filterFreeText ?? "");
    setFilterLocations(searchParams.filterLocations ?? "");
    setFilterAreas(searchParams.filterAreas ?? "");
    setFilterRemoteOptions(searchParams.filterRemoteOptions ?? "");

    setSearchIsActive(Object.values(searchParams).some((v) => v && v !== ""));
  }, [searchParams]);

  const submitOnChange = (form) => {
    submit(form, { replace: searchIsActive });
  };

  const clearFilters = () => {
    navigate(-1);
  };

  return (
    <div className="counsellor-gallery-wrapper">
      <div className="hero">
        <div className="col-2">
          <div className="row-2">
            <h2>Hitta handledaren för dig och din grupp hos oss!</h2>
            <p>
              Bläddra vidare för att se handledare och vårt nya
              filteringssystem.
            </p>
          </div>
          <img src={galleryIllustration} alt="Gallery Illustration"></img>

          <div></div>
          <div className="row-2">
            <h2>Har du frågor eller behöver hjälp att hitta rätt?</h2>
            <div>
              <a className="button">Till formulär</a>
            </div>
          </div>
        </div>
      </div>

      <h2>Hitta handledare över hela Sverige!</h2>
      <Form id="search-form" role="search" onSubmit={(e) => {}}>
        <div className="inputs-wrapper">
          <div className="input_with_label">
            <img src={iconSearch} alt="search icon"></img>
            <input
              id="filterFreeText"
              name="filterFreeText"
              placeholder="Sök..."
              value={filterFreeText}
              onChange={(e) => {
                setFilterFreeText(e.target.value);
                submitOnChange(e.target.form);
              }}
            />
          </div>
          <Select
            name="filterLocations"
            value={filterLocations}
            onChange={(e) => {
              setFilterLocations(e.target.value);
              submitOnChange(e.target.form);
            }}
          >
            <option value="">Region</option>
            {locationsOptions.map((location, i) => (
              <option key={i} value={location}>
                {location}
              </option>
            ))}
          </Select>
          <Select
            name="filterAreas"
            value={filterAreas}
            onChange={(e) => {
              setFilterAreas(e.target.value);
              submitOnChange(e.target.form);
            }}
          >
            <option value="">Specialområde</option>
            {areasOptions.map((area, i) => (
              <option key={i} value={area}>
                {area}
              </option>
            ))}
          </Select>
          <Select
            name="filterRemoteOptions"
            value={filterRemoteOptions}
            onChange={(e) => {
              setFilterRemoteOptions(e.target.value);
              submitOnChange(e.target.form);
            }}
          >
            <option value="">I lokal/digitalt</option>
            {remoteOptionsOptions.map((remoteOption, i) => (
              <option key={i} value={remoteOption}>
                {remoteOption}
              </option>
            ))}
          </Select>
        </div>

        <div className="clear-filters">
          {searchIsActive ? (
            <Link
              to=".."
              relative="path"
              onClick={(e) => {
                e.preventDefault();
                clearFilters();
              }}
            >
              Rensa alla filter
            </Link>
          ) : (
            <>&nbsp;</>
          )}
        </div>
      </Form>

      <div className="counsellor-gallery-cards-wrapper">
        <div className="grid">
          {galleryItems.map((item) => (
            <CounsellorCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CounsellorGallery;
