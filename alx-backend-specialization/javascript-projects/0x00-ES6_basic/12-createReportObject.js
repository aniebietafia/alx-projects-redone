export default function createReportObject(employeesList) {
  return {
    allEmployees: { ...employeesList },
    getNumberOfDepartments(employeesList) {
      const numberOfDepts = Object.keys(employeesList);
      return numberOfDepts.length;
    },
  };
}
