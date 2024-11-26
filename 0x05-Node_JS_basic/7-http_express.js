const express = require('express');
const fs = require('fs').promises;
require('process');

const app = express();
const port = 1245;

// Function to count students
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

// Home route
app.get('/', (req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  res.send('Hello Holberton School!');
});

// Students route
app.get('/students', (req, res) => {
  const databasePath = process.argv[2];
  if (!databasePath) {
    res.status(400).send('Cannot load the database');
    return;
  }

  countStudents(databasePath)
    .then((data) => {
      res.setHeader('Content-Type', 'text/plain');
      res.status(200).send(['This is the list of our students', ...data].join('\n'));
    })
    .catch((err) => {
      res.status(500).send(err.message);
    });
});

// Start the server
app.listen(port);

module.exports = app;
