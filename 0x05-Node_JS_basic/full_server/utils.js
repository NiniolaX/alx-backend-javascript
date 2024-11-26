const fs = require('fs').promises;

function readDatabase(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8')
      .then((data) => {
        // Splits data into rows
        const rows = data.split('\n').filter((row) => row.trim() !== '');

        // Remove csv header row
        rows.shift();

        // Log number of students in result array
        const result = [`Number of students: ${rows.length}`];
        const studentsByField = {};

        rows.forEach((row) => {
          const [firstName, lastName, age, field] = row.trim().split(',');
          if (firstName && lastName && age && field) {
            if (!studentsByField[field]) {
              studentsByField[field] = [];
            }
            studentsByField[field].push(firstName);
          }
        });

        // Log data from each field into result array
        for (const [field, names] of Object.entries(studentsByField)) {
          result.push(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
        }

        resolve(result);
      })
      .catch((err) => reject(err));
  });
}

module.exports = readDatabase;
