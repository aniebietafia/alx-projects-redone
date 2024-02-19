export default function createReportObject(employeesList) {
    return {
        allEmployees: employeesList,
        getNumberOfDepartments() {
            const dept = Object.keys(employeesList);
            return dept.length;
        }
    }

}
