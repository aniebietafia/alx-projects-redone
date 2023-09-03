/*
Create a directory task_1 and copy these configuration files into this folder: package.json, tsconfig.json, webpack.config.js
•	firstName(string) and lastName(string). These two attributes should only be modifiable when a Teacher is first initialized
•	fullTimeEmployee(boolean) this attribute should always be defined
•	yearsOfExperience(number) this attribute is optional
•	location(string) this attribute should always be defined
•	Add the possibility to add any attribute to the Object like contract(boolean) without specifying the name of the attribute
*/

class Teacher {
  public firstName: string;
  public lastName: string;
  public fullTimeEmployee: boolean;
  public yearsOfExperience: number;
  public location: string;
  public contract: boolean;

  constructor(
    firstName: string,
    lastName: string,
    fullTimeEmployee: boolean,
    yearsOfExperience: number,
    location: string,
    contract: boolean
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullTimeEmployee = fullTimeEmployee;
    this.yearsOfExperience = yearsOfExperience;
    this.location = location;
    this.contract = contract;
  }
}

interface TeacherInterface {
  firstName: string;
  lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [propName: string]: any;
}
