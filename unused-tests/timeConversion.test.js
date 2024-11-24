const timeConversion = require("../timeConversion");

test("converts 12:00:00AM to 00:00:00", () => {
  expect(timeConversion("12:00:00AM")).toBe("00:00:00");
});

test("converts 01:00:00AM to 01:00:00", () => {
  expect(timeConversion("01:00:00AM")).toBe("01:00:00");
});

test("converts 12:00:00PM to 12:00:00", () => {
  expect(timeConversion("12:00:00PM")).toBe("12:00:00");
});

test("converts 01:00:00PM to 13:00:00", () => {
  expect(timeConversion("01:00:00PM")).toBe("13:00:00");
});

test("converts 11:59:59PM to 23:59:59", () => {
  expect(timeConversion("11:59:59PM")).toBe("23:59:59");
});

test("converts 11:59:59AM to 11:59:59", () => {
  expect(timeConversion("11:59:59AM")).toBe("11:59:59");
});
