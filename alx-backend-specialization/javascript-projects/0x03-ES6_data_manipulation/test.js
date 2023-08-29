// create a directory if it does not exist
// This function takes the fully resolved directory path as the first argument to the function and should be able to creat the direcrory if it does not exist.
// The function should return a promise that resolves with the path of the directory after the folder is created successfully.
//  If the directory already exists, resolve with the path of the directory.

const createDirectoryIfNotExists = (dirPath) => {
  return new Promise((resolve, reject) => {
    if (fs.existsSync(dirPath)) {
      resolve(dirPath);
    } else {
      fs.mkdir(dirPath, (err) => {
        if (err) {
          reject(err);
        } else {
          resolve(dirPath);
        }
      });
    }
  });
};

// Write the passed JavaScript object to a file.
// This function takes the fully resolved path as the first argument to the function and accepts a JavaScript object to write to as the second parameter.
// The function should return a promise that resolves without any data if the write operation was successful.
// If the passed object is not a JavaScript object, reject the Promise with an Error object with the message 'Invalid Data'.

const writeJSON = (filePath, object) => {
  return new Promise((resolve, reject) => {
    if (typeof object !== "object") {
      reject(new Error("Invalid Data"));
    } else {
      fs.writeFile(filePath, JSON.stringify(object), (err) => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    }
  });
};
