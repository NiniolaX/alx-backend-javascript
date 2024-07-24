// Rewrote the function appendToEachArrayValue to use ES6’s for...of operator
export default function appendToEachArrayValue(array, appendString) {
  const result = [];
  for (const item of array) {
    result.push(appendString + item);
  }

  return result;
}

/*
INTIAL FUNCTION:

export default function appendToEachArrayValue(array, appendString) {
  for (var idx in array) {
    var value = array[idx];
    array[idx] = appendString + value;
  }

  return array;
}
*/
