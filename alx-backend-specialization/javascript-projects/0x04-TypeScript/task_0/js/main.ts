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

const studentsList = [student_1, student_2];
