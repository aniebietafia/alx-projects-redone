/*
Create a file React.ts and write a React Class in the same namespace.
o	Add a new attribute experienceTeachingReact? (number) to the Teacher interface
o	In the class, write a method named getRequirements that will return a string Here is the list of requirements for React
o	Write a method named getAvailableTeacher that will return a string Available Teacher: <first name of teacher>
o	If the teacher doesn’t have any experience in teaching React, then the method should return a string No available teacher
*/

export interface Teacher {
  experienceTeachingReact?: number;
}

export default class React extends Subject {
  //  Add a new attribute experienceTeachingReact? (number) to the Teacher interface
  getRequirements(): string {
    return "Here is the list of requirements for React";
  }
  //  Write a method named getAvailableTeacher that will return a string Available Teacher: <first name of teacher>
  getAvailableTeacher(): string {
    //  If the teacher doesn’t have any experience in teaching React, then the method should return a string No available teacher
    if (!this.teacher.experienceTeachingReact) {
      return "No available teacher";
    }
    return `Available Teacher: ${this.teacher.firstName}`;
  }
}
