import readDatabase from '../utils';

class StudentsController {
  static async getAllStudents(req, res) {
    // Log students by fields, with field in alphabetical order
    try {
      const databasePath = process.argv[2];
      const data = await readDatabase(databasePath);

      let response = 'This is the list of our students\n';

      const sortedFields = Object.keys(data).sort();
      sortedFields.forEach((field) => {
        const numOfStudents = data[field].length;
        const students = data[field].join(', ');
        response += `Number of students in ${field}: ${numOfStudents}. List: ${students}\n`;
      });

      res.status(200).send(response);
    } catch (err) {
      res.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(req, res) {
    // Check that major is valid
    const { major } = req.params;
    if (major !== 'CS' && major !== 'SWE') {
      res.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    try {
      const databasePath = process.argv[2];
      const data = await readDatabase(databasePath);

      res.status(200).send(`List: ${data[major].join(', ')}`);
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }
}

export default StudentsController;
