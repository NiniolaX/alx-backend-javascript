/*
Condensed the internals of the *initial function* to 1 line - without changing the name of
each function/variable.
*/
export default function getSumOfHoods(initialNumber = 0, expansion1989 = 89, expansion2019 = 19) {
  return initialNumber + expansion1989 + expansion2019;
}

/*
INITIAL FUNCTION:

export default function getSumOfHoods(initialNumber, expansion1989, expansion2019) {
  if (expansion1989 === undefined) {
    expansion1989 = 89;
  }

  if (expansion2019 === undefined) {
    expansion2019 = 19;
  }
  return initialNumber + expansion1989 + expansion2019;
}
*/
