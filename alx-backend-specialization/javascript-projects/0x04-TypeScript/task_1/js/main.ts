/*
Create a directory task_1 and copy these configuration files into this folder: package.json, tsconfig.json, webpack.config.js
•	firstName(string) and lastName(string). These two attributes should only be modifiable when a Teacher is first initialized
•	fullTimeEmployee(boolean) this attribute should always be defined
•	yearsOfExperience(number) this attribute is optional
•	location(string) this attribute should always be defined
•	Add the possibility to add any attribute to the Object like contract(boolean) without specifying the name of the attribute
*/

interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [propName: string]: any;
}

/* 
Write an interface named Directors that extends Teacher. It requires an attribute named numberOfReports(number)
 */

interface Directors extends Teacher {
  numberOfReports: number;
}
