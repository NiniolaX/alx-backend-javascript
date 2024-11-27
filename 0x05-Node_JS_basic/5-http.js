const http = require('http');
const fs = require('fs').promises;
require('process');

const port = 1245;

// Function to count students in /students path
function countStudents(path) {
  return fs.readFile(path, 'utf-8')
    .then((data) => {
      // Splits data into rows and remove empty rows
      const rows = data.split('\n').filter((row) => row.length > 0);

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

      return result;
    })
    .catch(() => {
      throw new Error('Cannot load the database');
    });
}

// Create http server
const app = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  if (req.url === '/') {
    res.statusCode = 200;
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    res.statusCode = 200;
    const databasePath = process.argv[2];
    countStudents(databasePath)
      .then((data) => {
        res.end(['This is the list of our students', ...data].join('\n'));
      })
      .catch((err) => {
        res.end(err.message);
      });
  }
});

app.listen(port);

module.exports = app;
