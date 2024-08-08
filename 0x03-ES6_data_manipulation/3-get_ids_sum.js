// Function returns sum of all the student IDs.
export default function getStudentIdsSum(studentsList) {
    const sumOfIds = studentsList.map((student) => student.id).reduce((total, id) => total + id);
    return sumOfIds;
}