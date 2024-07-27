/*
Function takes in a promise as argument and appends three handlers to
the promise based on how promise was settled
*/
export default function handleResponseFromAPI(promise) {
  promise.then(() => ({ status: 200, body: 'success' }))
    .catch(() => Error())
    .finally(() => {
      console.log('Got a response from the API');
    });
}
