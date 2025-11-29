/// <reference path="./crud.d.ts" />

import { RowID, RowElement } from './interface';
import * as CRUD from './crud';

// Create row object
const row: RowElement = {
  firstName: "Guillaume",
  lastName: "Salva"
};

// Insert row
const newRowID: RowID = CRUD.insertRow(row);

// Update row object
const updatedRow: RowElement = {
  ...row,
  age: 23
};

// Update it
CRUD.updateRow(newRowID, updatedRow);

// Delete it
CRUD.deleteRow(newRowID);
