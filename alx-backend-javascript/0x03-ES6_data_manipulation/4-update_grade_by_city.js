export default function updateStudentGradeByCity(studentList, city, newGrades) {
  const studentByCity = studentList.filter((student) => {
    return student["location"] === city;
  });

  const finalGrade = studentByCity.map((student) => {
    const grade = newGrades.filter((newGrade) => {
      return newGrade["studentId"] === student["id"];
    });

    if (grade.length === 0) {
      grade.push({ studentId: student["id"], grade: "N/A" });
    }

    return { ...student, grade: grade[0]["grade"] };
  });

  return finalGrade;
}
