export default function createIteratorObject(report) {
    const mergedEmployees = [];
    const allEmployees = Object.values(report.allEmployees);

    for (const employees of allEmployees) {
        for (const employee of employees) {
            mergedEmployees.push(employee);
        }
    }

    return mergedEmployees;
}

