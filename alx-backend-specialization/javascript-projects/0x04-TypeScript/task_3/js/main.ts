/*
•	At the top of the file create a triple slash directive that includes all the dependencies from crud.d.ts
•	Import the rowID type and rowElement from interface.ts
•	Import everything from crud.js as CRUD
Create an object called row with the type RowElement with the fields set to these values:
•	firstName: Guillaume
•	lastName: Salva
Create a const variable named newRowID with the type RowID and assign the value the insertRow command.
Next, create a const variable named updatedRow with the type RowElement and update row with an age field set to 23
Finally, call the updateRow and deleteRow commands.
*/

/// <reference path="./crud.d.ts" />

import { RowID, RowElement } from "./interface";
import * as CRUD from "./crud.js";

const row: RowElement = {
  firstName: "Guillaume",
  lastName: "Salva",
};

const newRowID: RowID = CRUD.insertRow(row);

const updatedRow: RowElement = {
  ...row,
  age: 23,
};

CRUD.updateRow(newRowID, updatedRow);
CRUD.deleteRow(newRowID);
