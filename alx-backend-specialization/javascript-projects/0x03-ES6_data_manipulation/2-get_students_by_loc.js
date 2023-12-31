const getStudentsByLocation = (studentList, city) => {
  if (!Array.isArray(studentList)) return [];
  const filteredResult = [];

  studentList.filter((obj) => {
    if (obj.location.includes(city)) {
      filteredResult.push(obj);
    }
  });

  return filteredResult;
};

export default getStudentsByLocation;
