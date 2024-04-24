import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  // Call the signUpUser and uploadPhoto functions
  const promise1 = signUpUser(firstName, lastName);
  const promise2 = uploadPhoto(fileName);

  // Create an array of promises
  const promises = [promise1, promise2];

  // Return a Promise that settles when all the provided Promises have either resolved or rejected
  return Promise.allSettled(promises).then((results) => results.map((result) => ({
    status: result.status,
    value: result.status === 'fulfilled' ? result.value : result.reason,
  })));
}
