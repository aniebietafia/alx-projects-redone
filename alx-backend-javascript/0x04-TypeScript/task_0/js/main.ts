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

const studentsList: Student[] = [student_1, student_2];

const createStudentTable = (studentObject) => {
    const table = document.createElement('table');

    const tableHeader1 = document.createElement('th');
    const tableHeader2 = document.createElement('th');

    const tableRow1 = document.createElement('tr');
    const tableRow2 = document.createElement('tr');

    const tableData1 = document.createElement('td');
    const tableData2 = document.createElement('td');

    document.body.appendChild(table);

    tableHeader1.textContent = "First Name";
    tableHeader2.textContent = "Location";

    tableRow1.appendChild(tableHeader1);
    tableRow1.appendChild(tableHeader2);

    tableRow2.appendChild(tableData1);
    tableRow2.appendChild(tableData2);

    for (const student in studentObject) {
        tableData1.textContent = student.firstName;
        tableData2.textContent = student.location;
    }

    table.appendChild(tableRow1);
    table.appendChild(tableRow2);
}
