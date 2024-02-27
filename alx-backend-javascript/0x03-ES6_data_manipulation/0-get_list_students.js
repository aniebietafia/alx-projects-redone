const getListStudents = () => {
    const result = [];

    const student1 = studentLists(1, 'Guillaume', 'San Francisco');
    const student2 = studentLists(2, 'James', 'Columbia');
    const student3 = studentLists(5, 'Serena', 'San Francisco');

    result.push(student1, student2, student3);

    return result;
}

const studentLists = (id, firstName, location) => {
    return { id, firstName, location };
}

export default getListStudents;
