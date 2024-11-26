const http = require('http');
const fs = require('fs').promises;
require('process');

const host = '127.0.0.1';
const port = 1245;

// Get path to database file
const databasePath = process.argv[2];
if (!databasePath) {
  console.error('Cannot load the database');
  process.exit(1);
}

function countStudents(path) {
  return fs.readFile(path, 'utf-8')
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

      return result;
    })
    .catch(() => {
      throw new Error('Cannot load the database');
    });
}

// Create http server
const app = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    countStudents(databasePath)
      .then((data) => {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(['This is the list of our students', ...data].join('\n'));
      })
      .catch((err) => {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end(err.message);
      });
  }
});

app.listen(port, host);

module.exports = app;
