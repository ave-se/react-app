import data from "./dummyData";

export function getListView(filter) {
  filter = {
    languages: [],
    areas: [],
    freeText: "",
    ...filter,
  };

  let filteredData = data;

  //filter: languages
  if (filter.languages.length > 0) {
    filteredData = filteredData.filter((entry) =>
      filter.languages.some((language) => entry.languages.includes(language))
    );
  }

  //filter: areas
  if (filter.areas.length > 0) {
    filteredData = filteredData.filter((entry) =>
      filter.areas.some((area) => entry.areas.includes(area))
    );
  }

  //filter: freeText
  if (filter.freeText) {
    filteredData = filteredData.filter(
      (entry) =>
        entry.firstName
          .toLowerCase()
          .startsWith(filter.freeText.toLowerCase()) ||
        entry.lastName.toLowerCase().startsWith(filter.freeText.toLowerCase())
    );
  }

  return filteredData;
}

export function getAllUniqueLanguages() {
  const languages = new Set();

  for (let entry of data) {
    for (let language of entry.languages) {
      languages.add(language);
    }
  }

  return [...languages].sort();
}

export function getAllUniqueAreas() {
  const areas = new Set();

  for (let entry of data) {
    for (let area of entry.areas) {
      areas.add(area);
    }
  }

  return [...areas].sort();
}
