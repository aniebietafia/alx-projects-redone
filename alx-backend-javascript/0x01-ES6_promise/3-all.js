import { uploadPhoto, createUser } from "./utils.js";

export default function handleProfileSignup() {
    Promise.all([uploadPhoto(), createUser()]).then(data => {
        let result;

        const body = data[0].body;
        const firstName = data[1].firstName;
        const lastName = data[1].lastName;

        result = `${body} ${firstName} ${lastName}`;

        console.log(result);

    }).catch(err => {
        console.log("Signup system offline");
    });
}
