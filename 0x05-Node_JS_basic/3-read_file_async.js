/*
  countStudents - Asynchronously students in from a database to STDOUT
  Args:
    - path: Path to database (file)
  Returns:
    Dict of arrays: Students by their fields.
*/
const fs = require('fs').promises;

function countStudents(path) {
  return fs.readFile(path, 'utf-8')
    .then((data) => {
      const rows = data.split('\n').filter((row) => row.trim() !== '');
      rows.shift();

      const result = [`Number of students: ${rows.length}`];
      const studentsByField = {};

      for (const row of rows) {
        const [firstName, lastName, age, field] = row.trim().split(',');
        if (firstName && lastName && age && field) {
          if (!studentsByField[field]) {
            studentsByField[field] = [];
          }
          studentsByField[field].push(firstName);
        }
      }

      for (const [field, names] of Object.entries(studentsByField)) {
        result.push(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
      }

      result.forEach((res) => console.log(res));
      return result;
    })
    .catch(() => {
      throw new Error('Cannot load the database');
    });
}

module.exports = countStudents;
