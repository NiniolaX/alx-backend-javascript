// main.ts
/// <reference path="./crud.d.ts" />
import { RowID, RowElement } from './interface.js';
import * as CRUD from './crud';

const row: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva',
}

const newRowID: RowID = CRUD.insertRow(row);
const updatedRow: RowID = CRUD.updateRow(newRowID, { ...row, age: 23 });
