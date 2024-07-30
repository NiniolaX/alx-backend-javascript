// Function handles multiple promises
import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const signUpUserPromise = signUpUser(firstName, lastName);
  const uploadPhotoPromise = uploadPhoto(fileName);

  return Promise.allSettled([signUpUserPromise, uploadPhotoPromise])
    .then((results) => {
      const modifiedResults = results.map((result) => {
        if (result.status === 'rejected') {
          // Modify result on rejection to have a 'status' instead of 'reason' as required
          return { status: 'rejected', value: result.reason };
        }
        return result; // Return result for fulfillment as is
      });
      // console.log(modifiedResults); This checks that results is actually modified
      return modifiedResults;
    });
}
