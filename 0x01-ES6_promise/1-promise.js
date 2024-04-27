export default function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) {
      let obj = {
        status: 200,
        body: 'Success',
      };
      resolve(obj);
    } else {
      let errObj = {
        Error: 'The fake API is not working currently',
      };
      reject(errObj);
    }
  });
}
