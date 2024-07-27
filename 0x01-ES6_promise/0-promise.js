// Function returns a promise
export default function getResponseFromAPI() {
  const promise = new Promise(((resolve, reject) => {
    const userData = true; // Simulate a network request
    if (userData) {
      resolve(userData);
    } else {
      reject(new Error('Error fetching user data'));
    }
  }));
  return promise;
}
