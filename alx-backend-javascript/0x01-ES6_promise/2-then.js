export default function handleResponseFromAPI(promise) {
    const res = {
        status: 200,
        body: "success",
    };

    const response = new Promise((resolve, reject) => {
        if (promise) {
            resolve(res);
        } else {
            reject(new Error());
        }
    });

    response.then(() => {
        console.log("Got a response from the API");
    });

    return response;
}
