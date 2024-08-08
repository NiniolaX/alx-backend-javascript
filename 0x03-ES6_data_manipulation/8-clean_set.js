// Function returns a string of all the set values that start with a specific string
export default function cleanSet(set, startString) {
  if (startString === '') {
    return '';
  }
  return Array.from(set)
    .filter((element) => element.startsWith(startString))
    .map((element) => element.slice(3))
    .join('-');
}
