import { uploadPhoto, createUser } from './utils';

function handleProfileSignup() {
  console.log('test');

  profilePhoto = uploadPhoto();
  console.log(profilePhoto.body);

  //     .catch(() => {
  //       console.error('Signup system offline');
  //     });
}
handleProfileSignup();
