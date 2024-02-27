const getStudentsByLocation = (studentList, city) => {
    return studentList.filter((student) => {
        return student.location === city;
    });
}

export default getStudentsByLocation;
