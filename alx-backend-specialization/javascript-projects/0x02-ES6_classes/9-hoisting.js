export class HolbertonClass {
  constructor(year, location) {
    this._year = year;
    this._location = location;
  }

  get year() {
    return this._year;
  }

  get location() {
    return this._location;
  }

  get fullDescription() {
    return `${this._year} ${this._location}`;
  }

  static createClass(year, location) {
    return new HolbertonClass(year, location);
  }

  static logoPath() {
    return "https://assets.holbertonschool.com/media/holberton-logo.png";
  }

  static welcomeMessage() {
    return "Welcome to the Holberton School";
  }

  static easterEgg() {
    return "C is fun";
  }

  static listOfClassrooms() {
    return ["San Francisco", "Bogota", "Cali"];
  }

  static isHolbertonClass(obj) {
    return obj instanceof HolbertonClass;
  }

  static isClassroom(obj) {
    return obj instanceof Classroom;
  }

  static isStudentHolberton(obj) {
    return obj instanceof StudentHolberton;
  }
}

const class2019 = new HolbertonClass(2019, "San Francisco");
const class2020 = new HolbertonClass(2020, "San Francisco");

export class StudentHolberton {
  constructor(firstName, lastName, holbertonClass) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._holbertonClass = holbertonClass;
  }

  get fullName() {
    return `${this._firstName} ${this._lastName}`;
  }

  get holbertonClass() {
    return this._holbertonClass;
  }

  get fullStudentDescription() {
    return `${this._firstName} ${this._lastName} - ${this._holbertonClass.year} - ${this._holbertonClass.location}`;
  }

  static isStudentHolberton(obj) {
    return obj instanceof StudentHolberton;
  }

  static isHolbertonClass(obj) {
    return obj instanceof HolbertonClass;
  }

  static displayStudents(arr) {
    if (Array.isArray(arr)) {
      arr.forEach((student) => {
        if (StudentHolberton.isStudentHolberton(student)) {
          console.log(student.fullStudentDescription);
        }
      });
    }
  }

  static ofClassYear(arr, year) {
    if (Array.isArray(arr)) {
      return arr.filter((student) => {
        if (StudentHolberton.isStudentHolberton(student)) {
          return student.holbertonClass.year === year;
        }
      });
    }
  }
}

const student1 = new StudentHolberton("Guillaume", "Salva", class2020);
const student2 = new StudentHolberton("John", "Doe", class2020);
const student3 = new StudentHolberton("Albert", "Clinton", class2019);
const student4 = new StudentHolberton("Donald", "Bush", class2019);
const student5 = new StudentHolberton("Jason", "Sandler", class2019);

export const listOfStudents = [student1, student2, student3, student4, student5];
