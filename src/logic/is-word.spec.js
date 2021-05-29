import { isWord } from "./is-word.js";

describe("sorts the strings in an array in different ways", () => {
  describe("only letters pass", () => {
    it("all capital letters", () => {
      expect(isWord("HELLO")).toEqual(true);
    });
    it("all lower case letters", () => {
      expect(isWord("bye")).toEqual(true);
    });
    it("mixed lower/upper case letters", () => {
      expect(isWord("JavaScript")).toEqual(true);
    });
  });
  describe("other characters fail", () => {
    it("the empty string", () => {
      expect(isWord("")).toEqual(false);
    });
    it("punctuation", () => {
      expect(isWord("bye!")).toEqual(false);
    });
    it("spaces", () => {
      expect(isWord("good bye")).toEqual(false);
    });
    it("numbers", () => {
      expect(isWord("4ever")).toEqual(false);
    });
  });
  describe("default parameters", () => {
    it('the argument defaults to ""', () => {
      expect(isWord()).toEqual(false);
    });
  });
});
