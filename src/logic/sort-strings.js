/**
 * Sorts an array of strings in different ways.
 * It does not modify the argument (no side-effects).
 *
 * @param {string[]} [toSort=''] - The array of strings to sort.
 * @param {string} [sortType='oldest'] - How to sort the strings, 6 options.
 * - oldest: from oldest to newest
 * - newest: from newest to oldest
 * - shortest: from shortest to longest
 * - longest: from longest to shortest
 * - a: alphabetical order
 * - z: reverse alphabetical order
 * if the sortType is not one of these 6 options, a copy of toSort is returned
 * @returns {string[]} a new sorted array containing the same strings as toSort
 */
export const sortStrings = (toSort = [], sortType = "") => {
  let copyToSort = [...toSort];
  if (sortType === "oldest") {
    return copyToSort;
  }
  if (sortType === "newest") {
    return copyToSort.reverse();
  }
  if (sortType === "a") {
    return copyToSort.sort();
  }
  if (sortType === "z") {
    copyToSort = copyToSort.sort();
    return copyToSort.reverse();
  }
  if (sortType === "shortest") {
    copyToSort.sort((a, b) => a.length - b.length);
    return copyToSort;
  }
  if (sortType === "longest") {
    copyToSort.sort((a, b) => b.length - a.length);
    return copyToSort;
  }
  return copyToSort;
};
