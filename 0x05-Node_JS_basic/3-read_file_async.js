/*
  countStudents - Asynchronously students in from a database to STDOUT
  Args:
    - path: Path to database (file)
  Returns:
    Null
*/
const fs = require('fs');

function countStudents(path) {
  return fs.readFile(path, 'utf-8')
    .then((data) => {
      // Split file into rows and remove empty rows
      const rows = data.split('\n').filter((row) => row.trim() !== '');

      // Remove header
      rows.shift();

      // Log total number of students
      console.log(`Number of students: ${rows.length}`);

      // Object to hold students by field
      const studentsByField = {};

      for (const row of rows) {
        if (row.length > 0) {
          const [firstName, lastName, age, field] = row.trim().split(',');

          // Skip invalid rows
          if (firstName && lastName && age && field) {
            if (!(field in studentsByField)) {
              studentsByField[field] = [];
            }
            studentsByField[field].push(firstName);
          }
        }
      }

      for (const [field, names] of Object.entries(studentsByField)) {
        console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
      }
    })
    .cath((err) => {
      throw new Error('Cannot load the database');
    });
}

module.exports = countStudents;
