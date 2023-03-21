import { expect, test } from "vitest";
import data from "../data/dummyData";

// const testData =

test("All entries should have [id]", () => {
  const result = data.every((entry) => "id" in entry);

  expect(result).toBe(true);
});

test("All IDs should be unique", () => {
  const ids = data.map((entry) => entry.id);

  const uniqueIds = [...new Set(ids)];

  expect(ids.length === uniqueIds.length).toBe(true);
});

test("All entries should have [firstName]", () => {
  const result = data.every((entry) => "firstName" in entry);

  expect(result).toBe(true);
});

test("All entries should have [ratePerSession]", () => {
  const result = data.every((entry) => "ratePerSession" in entry);

  expect(result).toBe(true);
});

test("All entries should have [location]", () => {
  const result = data.every((entry) => "location" in entry);

  expect(result).toBe(true);
});

test("All entries should have [title]", () => {
  const result = data.every((entry) => "title" in entry);

  expect(result).toBe(true);
});

test("All entries should have [avatarUrl]", () => {
  const result = data.every((entry) => "avatarUrl" in entry);

  expect(result).toBe(true);
});

test("All entries should have [areas]", () => {
  const result = data.every((entry) => "areas" in entry);

  expect(result).toBe(true);
});

test("All entries should have [remoteOptions]", () => {
  const result = data.every((entry) => "remoteOptions" in entry);

  expect(result).toBe(true);
});

test("All entries should have [elevatorPitch]", () => {
  const result = data.every((entry) => "elevatorPitch" in entry);

  expect(result).toBe(true);
});

test("All entries should have [aboutMe]", () => {
  const result = data.every((entry) => "aboutMe" in entry);

  expect(result).toBe(true);
});

test("All entries should have [occupationalBackground]", () => {
  const result = data.every((entry) => "occupationalBackground" in entry);

  expect(result).toBe(true);
});

test("All entries should have [methods]", () => {
  const result = data.every((entry) => "methods" in entry);

  expect(result).toBe(true);
});

test("All entries should have [personality]", () => {
  const result = data.every((entry) => "personality" in entry);

  expect(result).toBe(true);
});
