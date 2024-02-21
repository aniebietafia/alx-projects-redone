export default function uploadPhoto(filename) {
    const promise = new Promise((resolve, reject) => {
        reject(new Error(`${filename} cannot be processed`));
        });

    return promise;
}
