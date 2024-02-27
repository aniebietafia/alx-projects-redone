export default function getListStudentIds(studentList) {
    if (!Array.isArray(studentList)) return [];

    return studentList.map((student) => {
        return student["id"];
    });
}

