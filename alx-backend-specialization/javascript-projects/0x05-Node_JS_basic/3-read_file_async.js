/*
Using the database database.csv (provided in project description), create a function countStudents in the file 3-read_file_async.js.
•	Create a function named countStudents. It should accept a path in argument (same as in 2-read_file.js)
•	The script should attempt to read the database file asynchronously
•	The function should return a Promise
•	If the database is not available, it should throw an error with the text Cannot load the database
•	If the database is available, it should log the following message to the console Number of students:        NUMBER_OF_STUDENTS
•	It should log the number of students in each field, and the list with the following format: Number of students in FIELD: 6. List: LIST_OF_FIRSTNAMES
•	CSV file can contain empty lines (at the end) - and they are not a valid student!
 */

import fs from "node:fs";

export default function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, (err, data) => {
      if (err) reject(Error("Cannot load the database"));
      if (data) {
        let lines = data.toString().split("\n");
        lines = lines.filter((line) => line.length > 0);
        let n = lines.length - 1;
        console.log(`Number of students: ${n}`);
        const fields = {};
        for (const line of lines) {
          const student = line.split(",");
          if (!fields[student[3]]) fields[student[3]] = [];
          if (student[0] !== "firstname") fields[student[3]].push(student[0]);
        }
        for (const field in fields) {
          if (field) {
            const list = fields[field];
            const count = list.length;
            console.log(`Number of students in ${field}: ${count}. List: ${list.join(", ")}`);
          }
        }
        resolve();
      }
    });
  });
}
