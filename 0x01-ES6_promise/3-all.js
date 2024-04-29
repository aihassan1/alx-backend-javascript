import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then(([photo, username]) => {
      console.log(`${photo.body} ${username.firstName} ${username.lastName}`);
    })

    .catch(() => {
      console.error('Signup system offline');
    });
}
