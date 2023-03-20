import data from "./dummyData";

export async function getGalleryItems(filter) {
  filter = {
    areas: [],
    location: [],
    remoteOptions: [],
    freeText: "",
    ...filter,
  };

  let filteredData = data;

  //filter: areas
  if (filter.areas.length > 0) {
    filteredData = filteredData.filter((entry) =>
      filter.areas.every((area) => entry.areas.includes(area))
    );
  }

  // filter: location
  if (filter.location.length > 0) {
    filteredData = filteredData.filter((entry) =>
      filter.location.every((location) => entry.location.includes(location))
    );
  }

  // filter: remote or on site sessions
  if (filter.remoteOptions.length > 0) {
    filteredData = filteredData.filter((entry) =>
      filter.remoteOptions.every((remoteOption) =>
        entry.remoteOptions.includes(remoteOption)
      )
    );
  }

  //filter: freeText
  //todo: should look at full name as well...
  if (filter.freeText) {
    filteredData = filteredData.filter((entry) =>
      entry.firstName.toLowerCase().startsWith(filter.freeText.toLowerCase())
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
      elevatorPitch,
    }) => ({
      firstName,
      ratePerSession,
      avatarUrl,
      areas,
      title,
      location,
      id,
      elevatorPitch,
    })
  );
}

export async function getAllUniqueAreas() {
  const areas = new Set();

  for (let entry of data) {
    for (let area of entry.areas) {
      areas.add(area);
    }
  }

  return [...areas].sort();
}

export async function getAllUniqueLocations() {
  const locations = new Set();

  for (let entry of data) {
    locations.add(entry.location);
  }

  return [...locations].sort();
}

export async function getAllUniqueRemoteOptions() {
  const remoteOptions = new Set();

  for (let entry of data) {
    for (let remoteOption of entry.remoteOptions) {
      remoteOptions.add(remoteOption);
    }
  }

  return [...remoteOptions].sort();
}

export async function getProfileView(searchId) {
  return data.find(({ id }) => id === searchId);
}
