export default function handleResponseFromAPI(promise) {
  promise
    .then(() => {
      const obj = {
        status: 200,
        body: 'success',
      };
      console.log(obj);
      return obj;
    })
    .catch(() => {
      return new Error();
    })
    .finally(() => {
      console.log('Got a response from the API');
    });
}
