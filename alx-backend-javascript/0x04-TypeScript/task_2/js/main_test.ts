import { createEmployee, executeWork } from "./main";

console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee('$500'));


executeWork(createEmployee(200));
executeWork(createEmployee(1000));