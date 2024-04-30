import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  try {
    const photo = await uploadPhoto();
    const user = await createUser();
    const obj = {
      photo,
      user,
    };
    return obj;
  } catch (err) {
    return {
      photo: null,
      user: null,
    };
  }
}
