// Returns an array of ids from a list of object
export default function getListStudentIds(studentList) {
  if (studentList instanceof Array) {
    const studentIds = studentList.map((student) => student.id);
    return studentIds;
  }
  return [];
}
