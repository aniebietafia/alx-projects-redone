import getListStudentIds from "./1-get_list_student_ids.js";

const getStudentIdsSum = (studentList) => {
    const studentIds = getListStudentIds(studentList);

    return studentIds.reduce((prev, curr) => {
        return prev + curr;
    }, 0);
}

export default getStudentIdsSum;
