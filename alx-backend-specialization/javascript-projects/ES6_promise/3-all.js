import { uploadPhoto, createUser } from "./utils.js";

export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then(([resp1, resp2]) => {
      console.log(resp1.body, resp2.firstName, resp2.lastName);
    })
    .catch((err) => {
      console.log("Signup system offline", err);
    });
}
