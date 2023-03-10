import data from "./dummyData";

export function getGalleryItems(filter) {
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
      filter.languages.every((language) => entry.languages.includes(language))
    );
  }

  //filter: areas
  if (filter.areas.length > 0) {
    filteredData = filteredData.filter((entry) =>
      filter.areas.every((area) => entry.areas.includes(area))
    );
  }

  //filter: freeText
  //todo: should look at full name as well...
  if (filter.freeText) {
    filteredData = filteredData.filter(
      (entry) =>
        entry.firstName
          .toLowerCase()
          .startsWith(filter.freeText.toLowerCase())
    );
  }

  return filteredData.map(
    ({
      firstName,
      ratePerSession,
      avatarUrl,
      areas,
      title,
      location,
      id,
    }) => ({
      firstName,
      ratePerSession,
      avatarUrl,
      areas,
      title,
      location,
      id,
    })
  );
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

export function getProfileView(searchId) {
  return data.find(({ id }) => id === searchId);
}
