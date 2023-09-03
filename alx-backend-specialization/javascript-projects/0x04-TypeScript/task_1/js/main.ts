//  Task 1.0 - Build the Teacher interface
/*
Create a directory task_1 and copy these configuration files into this folder: package.json, tsconfig.json, webpack.config.js
•	firstName(string) and lastName(string). These two attributes should only be modifiable when a Teacher is first initialized
•	fullTimeEmployee(boolean) this attribute should always be defined
•	yearsOfExperience(number) this attribute is optional
•	location(string) this attribute should always be defined
•	Add the possibility to add any attribute to the Object like contract(boolean) without specifying the name of the attribute
*/

export interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [propName: string]: any;
}

// Task 1.1 - Extending the Teacher class
/* 
Write an interface named Directors that extends Teacher. It requires an attribute named numberOfReports(number)
 */

export interface Directors extends Teacher {
  numberOfReports: number;
}

// Task 1.2 - Printing teachers
/*
Write a function printTeacher:
•	It accepts two arguments firstName and lastName
•	It returns the first letter of the firstName and the full lastName
•	Example: printTeacher("John", "Doe") -> J. Doe
Write an interface for the function named printTeacherFunction
*/

export interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Method 1
export const printTeacher: printTeacherFunction = (firstName: string, lastName: string): string => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

// Method 2
export const printTeacher2: printTeacherFunction = (firstName: string, lastName: string): string => {
  const firstLetterOfFirstName = firstName.slice(0, 1).toUpperCase();
  return `${firstLetterOfFirstName}. ${lastName}`;
};

// Task 1.3 - Writing a class
/*
Write a Class named StudentClass:
•	The constructor accepts firstName(string) and lastName(string) arguments
•	The class has a method named workOnHomework that return the string Currently working
•	The class has a method named displayName. It returns the firstName of the student
•	The constructor of the class should be described through an Interface
•	The class should be described through an Interface
Requirements:
•	You can reuse the Webpack configuration from the previous exercise to compile the code.
•	When running npm run build, no TypeScript error should be displayed.
•	Every variable should use TypeScript when possible.
*/

export interface StudentConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}

export interface StudentClassInterface {
  firstName: string;
  lastName: string;
  workOnHomework(): string;
  displayName(): string;
}

export const StudentClass: StudentConstructor = class StudentClass implements StudentClassInterface {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
};
