/* eslint-disable spellcheck/spell-checker */
import { sortStrings } from "./sort-strings.js";

describe("sorts the strings in an array in different ways", () => {
  describe("oldest to newest", () => {
    it("empty array", () => {
      expect(sortStrings([], "oldest")).toEqual([]);
    });
    it("3 items", () => {
      expect(sortStrings(["a", "b", "c"], "oldest")).toEqual(["a", "b", "c"]);
    });
    it("4 items", () => {
      const expected = ["a", "b", "c", "d"];
      expect(sortStrings(["a", "b", "c", "d"], "oldest")).toEqual(expected);
    });
  });
  describe("newest to oldest", () => {
    it("empty array", () => {
      expect(sortStrings([], "newest")).toEqual([]);
    });
    it("3 items", () => {
      expect(sortStrings(["a", "b", "c"], "newest")).toEqual(["c", "b", "a"]);
    });
    it("4 items", () => {
      const expected = ["d", "c", "b", "a"];
      expect(sortStrings(["a", "b", "c", "d"], "newest")).toEqual(expected);
    });
  });
  describe("alphabetical order", () => {
    it("empty array", () => {
      expect(sortStrings([], "a")).toEqual([]);
    });
    it("3 items", () => {
      expect(sortStrings(["b", "a", "c"], "a")).toEqual(["a", "b", "c"]);
    });
    it("4 items", () => {
      const expected = ["a", "b", "c", "d"];
      expect(sortStrings(["b", "d", "c", "a"], "a")).toEqual(expected);
    });
  });
  describe("reverse-alphabetical order", () => {
    it("empty array", () => {
      expect(sortStrings([], "z")).toEqual([]);
    });
    it("3 items", () => {
      expect(sortStrings(["b", "a", "c"], "z")).toEqual(["c", "b", "a"]);
    });
    it("4 items", () => {
      const expected = ["d", "c", "b", "a"];
      expect(sortStrings(["b", "d", "c", "a"], "z")).toEqual(expected);
    });
  });
  describe("longest to shortest", () => {
    it("empty array", () => {
      expect(sortStrings([], "longest")).toEqual([]);
    });
    it("3 items", () => {
      const expected = ["zzz", "ee", "e"];
      expect(sortStrings(["e", "zzz", "ee"], "longest")).toEqual(expected);
    });
    it("4 items", () => {
      const actual = sortStrings(["e", "bbb", "eeee", "ee"], "longest");
      expect(actual).toEqual(["eeee", "bbb", "ee", "e"]);
    });
  });
  describe("shortest to longest", () => {
    it("empty array", () => {
      expect(sortStrings([], "shortest")).toEqual([]);
    });
    it("3 items", () => {
      const expected = ["e", "ee", "zzz"];
      expect(sortStrings(["e", "zzz", "ee"], "shortest")).toEqual(expected);
    });
    it("4 items", () => {
      const actual = sortStrings(["e", "zzz", "eeee", "ee"], "shortest");
      expect(actual).toEqual(["e", "ee", "zzz", "eeee"]);
    });
  });
  describe("default parameters", () => {
    it("second argument is not passed", () => {
      expect(sortStrings(["a", "b", "c"])).toEqual(["a", "b", "c"]);
    });
    it("both arguments are not passed", () => {
      expect(sortStrings()).toEqual([]);
    });
  });
  describe("has no side-effects", () => {
    it("oldest to newest", () => {
      const arg = ["a", "b", "c"];
      const returned = sortStrings(arg, "oldest");
      expect(returned !== arg).toEqual(true);
    });
    it("newest to oldest", () => {
      const strings = ["a", "b", "c"];
      sortStrings(strings, "newest");
      expect(strings).toEqual(["a", "b", "c"]);
    });
    it("alphabetical order", () => {
      const strings = ["a", "b", "c"];
      sortStrings(strings, "a");
      expect(strings).toEqual(["a", "b", "c"]);
    });
    it("reverse-alphabetical order", () => {
      const strings = ["a", "b", "c"];
      sortStrings(strings, "z");
      expect(strings).toEqual(["a", "b", "c"]);
    });
    it("shortest to longest", () => {
      const strings = ["a", "b", "c"];
      sortStrings(strings, "shortest");
      expect(strings).toEqual(["a", "b", "c"]);
    });
    it("longest to shortest", () => {
      const strings = ["a", "b", "c"];
      sortStrings(strings, "longest");
      expect(strings).toEqual(["a", "b", "c"]);
    });
    it("invalid sort type", () => {
      const strings = ["a", "b", "c"];
      sortStrings(strings, "potato");
      expect(strings).toEqual(["a", "b", "c"]);
    });
    it("no sort type", () => {
      const strings = ["a", "b", "c"];
      sortStrings(strings);
      expect(strings).toEqual(["a", "b", "c"]);
    });
  });
});
