/*
•	Create a file Teacher.ts and write a Teacher interface in a namespace named Subjects.
o	the interface requires firstName and lastName as string
•	Create a file Subject.ts and write a Subject class in the same namespace named Subjects.
o	the class has one attribute teacher that implements the Teacher interface
o	the class has one setter method setTeacher that accepts a teacher in argument (and as setter, set the instance attribute teacher with it)
•	Create a file Cpp.ts and make the following modifications in the same namespace.
o	Using declaration merging, add a new optional attribute experienceTeachingC (number) to the Teacher interface
o	Create a class Cpp extending from Subject
o	Write a method named getRequirements that will return a string Here is the list of requirements for Cpp
o	Write a method named getAvailableTeacher that will return a string Available Teacher: <first name of teacher>
o	If the teacher doesn’t have any experience in teaching C, then the method should return a string No available teacher
•	Create a file React.ts and write a React Class in the same namespace.
o	Add a new attribute experienceTeachingReact? (number) to the Teacher interface
o	In the class, write a method named getRequirements that will return a string Here is the list of requirements for React
o	Write a method named getAvailableTeacher that will return a string Available Teacher: <first name of teacher>
o	If the teacher doesn’t have any experience in teaching React, then the method should return a string No available teacher
•	Create a file Java.ts and write a Java Class in the same namespace.
o	Add a new attribute experienceTeachingJava? (number) to the Teacher interface
o	In the class, write a method named getRequirements that will return a string Here is the list of requirements for Java
o	Write a method named getAvailableTeacher that will return a string Available Teacher: <first name of teacher>
o	If the teacher doesn’t have any experience in teaching Java, then the method should return a string No available teacher
*/

//  write a Teacher interface in a namespace named Subjects
namespace Subjects {
  export interface Teacher {
    firstName: string;
    lastName: string;
  }
}
