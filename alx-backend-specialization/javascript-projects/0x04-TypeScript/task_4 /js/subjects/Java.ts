/*
Create a file Java.ts and write a Java Class in the same namespace.
o	Add a new attribute experienceTeachingJava? (number) to the Teacher interface
o	In the class, write a method named getRequirements that will return a string Here is the list of requirements for Java
o	Write a method named getAvailableTeacher that will return a string Available Teacher: <first name of teacher>
o	If the teacher doesn’t have any experience in teaching Java, then the method should return a string No available teacher
*/

export interface Teacher {
  experienceTeachingJava?: number;
}

export default class Java extends Subject {
  //  Add a new attribute experienceTeachingJava? (number) to the Teacher interface
  getRequirements(): string {
    return "Here is the list of requirements for Java";
  }
  //  Write a method named getAvailableTeacher that will return a string Available Teacher: <first name of teacher>
  getAvailableTeacher(): string {
    //  If the teacher doesn’t have any experience in teaching Java, then the method should return a string No available teacher
    if (!this.teacher.experienceTeachingJava) {
      return "No available teacher";
    }
    return `Available Teacher: ${this.teacher.firstName}`;
  }
}
