// Function returns a string of all the set values that start with a specific string
export default function cleanSet(set, startString) {
  if (!startString || (typeof startString !== 'string')) {
    return '';
  }
  return Array.from(set) // Create an array from set
    .filter((element) => element && element.startsWith(startString)) // also skip empty elements
    .map((element) => element.slice(startString.length))
    .join('-');
}
