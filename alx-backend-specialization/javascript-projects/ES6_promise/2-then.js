export default function handleResponseFromAPI(promise) {
  if (promise) {
    return Promise.resolve({
      status: 200,
      body: "success",
    })
      .then((resp) => {
        console.log("Got a response from the API", resp);
      })
      .catch((err) => {
        console.log(err);
        throw new Error();
      });
  }
}
