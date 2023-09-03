//  Task 2.1 - Creating interfaces and classes
/*
Create the DirectorInterface interface with the 3 expected methods:
•	workFromHome() returning a string
•	getCoffeeBreak() returning a string
•	workDirectorTasks() returning a string
Create the TeacherInterface interface with the 3 expected methods:
•	workFromHome() returning a string
•	getCoffeeBreak() returning a string
•	workTeacherTasks() returning a string
Create a class Director that will implement DirectorInterface
•	workFromHome should return the string Working from home
•	getToWork should return the string Getting a coffee break
•	workDirectorTasks should return the string Getting to director tasks
Create a class Teacher that will implement TeacherInterface
•	workFromHome should return the string Cannot work from home
•	getCoffeeBreak should return the string Cannot have a break
•	workTeacherTasks should return the string Getting to work
Create a function createEmployee with the following requirements:
•	It can return either a Director or a Teacher instance
•	It accepts 1 arguments:
o	salary(either number or string)
•	if salary is a number and less than 500 - It should return a new Teacher. Otherwise it should return a Director
*/

export interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

export interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

export class Director implements DirectorInterface {
  workFromHome(): string {
    return "Working from home";
  }

  getCoffeeBreak(): string {
    return "Getting a coffee break";
  }

  workDirectorTasks(): string {
    return "Getting to director tasks";
  }
}

export class Teacher implements TeacherInterface {
  workFromHome(): string {
    return "Cannot work from home";
  }

  getCoffeeBreak(): string {
    return "Cannot have a break";
  }

  workTeacherTasks(): string {
    return "Getting to work";
  }
}

export function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === "number" && salary < 500) {
    return new Teacher();
  } else {
    return new Director();
  }
}

//  Task 2.2 - Creating functions specific to employees
/*
Write a function isDirector:
•	it accepts employee as an argument
•	it will be used as a type predicate and if the employee is a director
Write a function executeWork:
•	it accepts employee as an argument
•	if the employee is a Director, it will call workDirectorTasks
•	if the employee is a Teacher, it will call workTeacherTasks
*/
export function isDirector(employee: Director | Teacher): employee is Director {
  return (employee as Director).workDirectorTasks !== undefined;
}

export function executeWork(employee: Director | Teacher): string {
  if (isDirector(employee)) {
    return employee.workDirectorTasks();
  } else {
    return employee.workTeacherTasks();
  }
}
