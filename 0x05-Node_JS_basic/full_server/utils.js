import { promises as fs } from 'fs';

function readDatabase(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8')
      .then((data) => {
        // Splits data into rows
        const rows = data.split('\n').filter((row) => row.length > 0);

        // Remove csv header row
        rows.shift();

        // Log number of students in result array
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

        resolve(studentsByField);
      })
      .catch((err) => reject(err));
  });
}

export default readDatabase;
