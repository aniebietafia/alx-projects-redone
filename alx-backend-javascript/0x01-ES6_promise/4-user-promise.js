function signUpUser(firstName, lastName) {
    const person = { firstName: firstName, lastName: lastName };
    const promise = new Promise((resolve, reject) => {
        resolve(person);
    });

    return promise;
}

export default signUpUser;
