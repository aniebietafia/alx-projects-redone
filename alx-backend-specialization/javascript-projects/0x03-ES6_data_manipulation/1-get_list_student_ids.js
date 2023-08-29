export default function getListStudentIds(arrOfObjects) {
  if (!Array.isArray(arrOfObjects)) return [];

  const studentIds = [];
  arrOfObjects.map((obj) => {
    studentIds.push(obj.id);
  });

  return studentIds;
}
