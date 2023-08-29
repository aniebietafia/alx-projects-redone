const getStudentsByLocation = (studentList, city) => {
  const filteredResult = [];

  studentList.filter((obj) => {
    if (obj.location === city) {
      filteredResult.push(obj);
    }
  });

  return filteredResult;
};

export default getStudentsByLocation;
