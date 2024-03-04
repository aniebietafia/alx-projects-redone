// creating Teacher interface
interface Teacher {
	readonly firstName: string;
	readonly lastName: string;
	fullTimeEmployee: boolean;
	yearsOfExperience?: number;
	location: string;
	[key: string]: boolean;
}

// using the teacher interface
const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

console.log(teacher3);

// creating directors interface extending from teacher interface
interface Directors extends Teacher {
	numberOfReports: number;
}

// using the directors interface
const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};
console.log(director1);

// creating interface to print function
interface printTeacherFunction {
	printTeacher: (firstName: string, lastName: string) => string;
}

function printTeacher: printTeacherFunction(firstName: string, lastName: string): string {
	return `${firstName.charAt(0)}. ${lastName}`
}

// writing a class
interface Student {
	firstName: string;
	lastName: string;
	workOnHomework: () => string;
	displayName: () => string;
}

class StudentClass {
	constructor(firstName: string, lastName: string) {
		this.firstName = firstName;
		this.lastName = lastName;
	}

	workOnHomework() {
		return "Currently working";
	}

	displayName() {
		return `${this.firstName}`
	}
}