// Resolves multiple promises
import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const handleSignUpPromise = Promise.all([uploadPhoto(), createUser()]);
  return handleSignUpPromise
    .then((results) => {
      const [{ body }, { firstName, lastName }] = results; // Destructures the results array
      console.log(`${body} ${firstName} ${lastName}`);
    })
    .catch(() => console.log('Signup system offline'));
}
