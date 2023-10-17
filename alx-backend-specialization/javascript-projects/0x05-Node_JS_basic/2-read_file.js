/*
Using the database database.csv (provided in project description), create a function countStudents in the file 2-read_file.js
•	Create a function named countStudents. It should accept a path in argument
•	The script should attempt to read the database file synchronously
•	If the database is not available, it should throw an error with the text Cannot load the database
•	If the database is available, it should log the following message to the console Number of students: NUMBER_OF_STUDENTS
•	It should log the number of students in each field, and the list with the following format: Number of students in FIELD: 6. List: LIST_OF_FIRSTNAMES
•	CSV file can contain empty lines (at the end) - and they are not a valid student!
*/

import fs from "fs";

export default function countStudents(path) {
  try {
    const data = fs.readFileSync(path, "utf-8");
    const lines = data.split("\n");
    let count = 0;
    const fields = {};
    const fieldList = [];
    for (const line of lines) {
      if (line !== "" && line !== lines[0]) {
        count += 1;
        const student = line.split(",");
        if (!fields[student[3]]) {
          fields[student[3]] = [];
          fieldList.push(student[3]);
        }
        fields[student[3]].push(student[0]);
      }
    }
    console.log(`NUMBER_OF_STUDENTS: ${count}`);
    for (const field of fieldList) {
      const list = fields[field];
      console.log(`Number of students in ${field}: ${list.length}. List: ${list.join(", ")}`);
    }
  } catch (error) {
    console.log("Cannot load the database.");
  }
}
