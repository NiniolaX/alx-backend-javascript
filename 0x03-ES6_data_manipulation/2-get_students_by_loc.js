// Returns an array of objects (students) who are located in a specific city
export default function getStudentsByLocation(studentsList, city) {
  const studentsInLocation = studentsList.filter((student) => student.location === city);
  return studentsInLocation;
}
