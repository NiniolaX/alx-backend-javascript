// Returns a boolean if all the elements in an array exist within a set
export default function hasValuesFromArray(set, array) {
  return array.every((element) => set.has(element));
}
