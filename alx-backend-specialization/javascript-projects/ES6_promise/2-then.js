export default function handleResponseFromAPI(promise) {
  const result = new Promise((resolve) => {
    if (promise) {
      resolve({
        status: 200,
        body: "success",
      });
    }
  })
    .then((resp) => {
      console.log("Got a response from the API", resp);
    })
    .catch((err) => {
      throw new Error();
    });
  return result;
}
