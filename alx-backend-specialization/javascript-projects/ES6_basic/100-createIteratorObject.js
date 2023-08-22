export default function createIteratorObject(report) {
  const result = [];
  for (const list of Object.values(report.allEmployees)) {
    result.push(...list);
  }
  return result;
}
