export default function getFullResponseFromAPI(success) {
    const res = {
        status: 200,
        body: "Success",
    };

    const promise = new Promise((resolve, reject) => {
        if (success) {
            resolve(res);
        } else {
            reject(new Error("The fake API is not working currently"));
        }
    });

    return promise;
}
