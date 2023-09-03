/*
The first part of will require that you build an interface and a type. Inside a file named interface.ts:
•	Create a type RowID and set it equal to number
•	Create an interface RowElement that contains these 3 fields:
o	firstName: string
o	lastName: string
o	age?: number
*/

export type RowID = number;

export interface RowElement {
  firstName: string;
  lastName: string;
  age?: number;
}
