// Function returns an array of students for a specific city with their new grades
export default function updateStudentGradeByCity(students, city, newGrades) {
  const studentsInCity = students.filter((student) => student.location === city);

  const updatedStudents = studentsInCity.map((student) => {
    const studentGrade = newGrades.find((grade) => grade.studentId === student.id);
    return { // Create new student object
      ...student, // Spread operator to copy student properties
      grade: studentGrade ? studentGrade.grade : 'N/A',
    };
  });

  return updatedStudents;
}
