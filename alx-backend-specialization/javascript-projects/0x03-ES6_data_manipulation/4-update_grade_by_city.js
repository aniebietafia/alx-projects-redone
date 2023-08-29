/*
Create a function updateStudentGradeByCity that returns an array of students for a specific city with their new grade. It should accept a list of students (from getListStudents), a city (String), and newGrades (Array of “grade” objects) as parameters.

If a student doesn’t have grade in newGrades, the final grade should be N/A.
You must use filter and map combined.
*/

const updateStudentGradeByCity = (students, city, newGrades) => {
  const studentsByCity = students.filter((student) => student.location === city);
  const updatedGrades = studentsByCity.map((student) => {
    const grade = newGrades.filter((newGrade) => newGrade.studentId === student.id);
    if (grade[0]) {
      return { ...student, grade: grade[0].grade };
    }
    return { ...student, grade: "N/A" };
  });
  return updatedGrades;
};

export default updateStudentGradeByCity;
