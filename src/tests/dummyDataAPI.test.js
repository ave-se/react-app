import { expect, expectTypeOf, test } from "vitest";
import * as dummyData from "../data/dummyDataAPI";

//setup testdata
const testData = [
  {
    id: 1,
    firstName: "A",
    ratePerSession: 0,
    location: "A",
    title: "",
    avatarUrl: "",
    areas: ["A"],
    remoteOptions: ["A"],
    elevatorPitch: "",
    aboutMe: "",
    occupationalBackground: "",
    methods: "",
    personality: "",
  },
  {
    id: 2,
    firstName: "C",
    ratePerSession: 0,
    location: "B",
    title: "",
    avatarUrl: "",
    areas: ["B"],
    remoteOptions: ["B"],
    elevatorPitch: "",
    aboutMe: "",
    occupationalBackground: "",
    methods: "",
    personality: "",
  },
  {
    id: 3,
    firstName: "C",
    ratePerSession: 0,
    location: "C",
    title: "",
    avatarUrl: "",
    areas: ["C"],
    remoteOptions: ["C"],
    elevatorPitch: "",
    aboutMe: "",
    occupationalBackground: "",
    methods: "",
    personality: "",
  },
  {
    id: 4,
    firstName: "D",
    ratePerSession: 0,
    location: "A",
    title: "",
    avatarUrl: "",
    areas: ["A", "B", "C", "D"],
    remoteOptions: ["A", "B", "C", "D"],
    elevatorPitch: "",
    aboutMe: "",
    occupationalBackground: "",
    methods: "",
    personality: "",
  },
];

dummyData.setData(testData);

//tests
test("test getAllUniqueAreas()", async () => {
  const toTest = await dummyData.getAllUniqueAreas();
  expect(toTest.join()).toBe("A,B,C,D");
});

test("test getAllUniqueLocations()", async () => {
  const toTest = await dummyData.getAllUniqueLocations();
  expect(toTest.join()).toBe("A,B,C");
});

test("test getAllUniqueRemoteOptions()", async () => {
  const toTest = await dummyData.getAllUniqueRemoteOptions();
  expect(toTest.join()).toBe("A,B,C,D");
});

test("test getProfileView(1)", async () => {
  const toTest = await dummyData.getProfileView(1);
  expect(toTest).toMatchObject(testData[0]);
});

test("test getGalleryItems() (no params)", async () => {
  const toTest = await dummyData.getGalleryItems();
  expect(toTest.length).toBe(4);
});

test("test getGalleryItems(...) (empty filters)", async () => {
  const filters = {
    freeText: "",
    areas: [],
    location: [],
    remoteOptions: [],
  };

  const toTest = await dummyData.getGalleryItems(filters);
  expect(toTest.length).toBe(4);
});

test("test getGalleryItems(...) (freeText filter)", async () => {
  const filters = {
    freeText: "A",
    areas: [],
    location: [],
    remoteOptions: [],
  };

  const toTest = await dummyData.getGalleryItems(filters);
  expect(toTest.length).toBe(1);
});

test("test getGalleryItems(...) (areas filter)", async () => {
  const filters = {
    freeText: "",
    areas: ["A"],
    location: [],
    remoteOptions: [],
  };

  const toTest = await dummyData.getGalleryItems(filters);
  expect(toTest.length).toBe(2);
});

test("test getGalleryItems(...) (location filter)", async () => {
  const filters = {
    freeText: "",
    areas: [],
    location: ["A"],
    remoteOptions: [],
  };

  const toTest = await dummyData.getGalleryItems(filters);
  expect(toTest.length).toBe(2);
});

test("test getGalleryItems(...) (remoteOptions filter)", async () => {
  const filters = {
    freeText: "",
    areas: [],
    location: [],
    remoteOptions: ["A"],
  };

  const toTest = await dummyData.getGalleryItems(filters);
  expect(toTest.length).toBe(2);
});

test("test getGalleryItems(...) (all filters)", async () => {
  const filters = {
    freeText: "A",
    areas: ["A"],
    location: ["A"],
    remoteOptions: ["A"],
  };

  const toTest = await dummyData.getGalleryItems(filters);
  expect(toTest.length).toBe(1);
});
