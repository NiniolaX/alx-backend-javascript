// Create two students
var student1 = {
    firstName: "Love",
    lastName: "Afinni",
    age: 26,
    location: "Ajah"
};
var student2 = {
    firstName: "Quyum",
    lastName: "Ajumobi",
    age: 19,
    location: "Akoka"
};
// Create an array named studentsList
var studentsList = [student1, student2];
// Render a table for each element in array
var table = document.querySelector('table');
var headerRow = table.insertRow();
headerRow.innerHTML = "<th>First name</th><th>Location</th>";
// Insert each student's data as a new row in table
for (var _i = 0, studentsList_1 = studentsList; _i < studentsList_1.length; _i++) {
    var student = studentsList_1[_i];
    var newRow = table.insertRow();
    newRow.innerHTML = "<td>".concat(student.firstName, "</td><td>").concat(student.location, "</td>");
}
