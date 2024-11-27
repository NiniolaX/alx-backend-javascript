import readDatabase from '../utils';

class StudentsController {
  static getAllStudents(request, response) {
    // Log students by fields, with field in alphabetical order
    const databasePath = process.argv[2];
    readDatabase(databasePath)
      .then((data) => {
        response.statusCode = 200;
        response.write('This is the list of our students');

        const sortedFields = Object.keys(data).sort();
        sortedFields.forEach((field) => {
          const numOfStudents = data[field].length;
          const students = data[field].join(', ');
          response.write(`Number of students in ${field}: ${numOfStudents}. List: ${students}\n`);
        });

        response.end();
      })
      .catch(() => {
        response.status(500).end('Cannot load the database');
      });
  }

  static getAllStudentsByMajor(request, response) {
    // Check that major is valid
    const { major } = request.params;
    if (major !== 'CS' && major !== 'SWE') {
      response.status(500).send('Major parameter must be CS or SWE');
    }

    const databasePath = process.argv[2];
    readDatabase(databasePath)
      .then((data) => {
        response.status(200).send(`List: ${data[major].join(', ')}`);
      })
      .catch(() => {
        response.status(500).send('Cannot load the database');
      });
  }
}

export default StudentsController;
