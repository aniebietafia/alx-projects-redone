/*
•	Write an interface named Student that accepts the following elements: firstName(string), lastName(string), age(number), and location(string)
•	Create two students, and create an array named studentsList containing the two variables
•	Using Vanilla Javascript, render a table and for each elements in the array, append a new row to the table
•	Each row should contain the first name of the student and the location
Requirements:
•	When running, Webpack should return No type errors found.
•	Every variable should use TypeScript when possible.
*/

interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student_1: Student = {
  firstName: "Aniebiet",
  lastName: "Afia",
  age: 35,
  location: "Nigeria",
};

const student_2: Student = {
  firstName: "Michelle",
  lastName: "Whyte",
  age: 26,
  location: "Canada",
};

const studentsList: Array<Student> = [student_1, student_2];

const table: HTMLTableElement = document.createElement("table");
const tableBody = document.createElement("tbody");
const tableHead = document.createElement("thead");
const tableHeadRow = document.createElement("tr");
const tableHeadData1 = document.createElement("th");
const tableHeadData2 = document.createElement("th");

tableHeadData1.innerHTML = "First Name";
tableHeadData2.innerHTML = "Location";

tableHeadRow.appendChild(tableHeadData1);
tableHeadRow.appendChild(tableHeadData2);
tableHead.appendChild(tableHeadRow);
table.appendChild(tableHead);

studentsList.forEach((student) => {
  const tableRow = document.createElement("tr");
  const tableData1 = document.createElement("td");
  const tableData2 = document.createElement("td");

  tableData1.innerHTML = student.firstName;
  tableData2.innerHTML = student.location;

  tableRow.appendChild(tableData1);
  tableRow.appendChild(tableData2);
  tableBody.appendChild(tableRow);
});

table.appendChild(tableBody);
