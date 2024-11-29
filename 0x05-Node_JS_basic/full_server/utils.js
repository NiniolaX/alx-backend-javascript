import fs from 'fs/promises';

const readDatabase = async (path) => {
  try {
    const data = await fs.readFile(path, 'utf-8');

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

    return studentsByField;
  } catch (error) {
    throw new Error('Cannot load database');
  }
};

export default readDatabase;
