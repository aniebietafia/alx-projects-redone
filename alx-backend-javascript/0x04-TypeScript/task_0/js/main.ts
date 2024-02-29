interface Student {
    firstName: string,
    lastName: string,
    age: number,
    location: string,
}

const student_1: Student = {
    firstName: 'Aniebiet',
    lastName: 'Afia',
    age: 34,
    location: 'Abuja',
}

const student_2: Student = {
    firstName: 'Michael',
    lastName: 'Bottle',
    age: 28,
    location: 'Star City',
}

const studentsList = [student_1, student_2];

const createStudentTable = (studentObject) => {
    const table = document.createElement('table');
    const th = document.createElement('th');
    const tr = document.createElement('tr');
    const td = document.createElement('td');

    for (const student in studentObject) {

    }
}
