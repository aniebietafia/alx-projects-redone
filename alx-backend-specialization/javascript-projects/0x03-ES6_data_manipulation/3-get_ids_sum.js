const getStudentIdsSum = (studentLists) => {
  const studentIds = [];
  studentLists.map((obj) => {
    studentIds.push(obj.id);
  });

  return studentIds.reduce((prev, curr) => {
    return prev + curr;
  }, 0);
};

export default getStudentIdsSum;
