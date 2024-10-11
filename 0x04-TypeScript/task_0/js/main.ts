// Create an interface for students
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create two students
const student1: Student = {
  firstName: "Love",
  lastName: "Afinni",
  age: 26,
  location: "Ajah"
}
const student2: Student = {
  firstName: "Quyum",
  lastName: "Ajumobi",
  age: 19,
  location: "Akoka"
}

// Create an array named studentsList
const studentsList: Student[] = [student1, student2];

// Render a table for each element in array
const table = document.querySelector('table');
const headerRow = table.insertRow();
headerRow.innerHTML = "<th>First name</th><th>Location</th>"

// Insert each student's data as a new row in table
for (const student of studentsList) {
  const newRow = table.insertRow();
  newRow.innerHTML = `<td>${student.firstName}</td><td>${student.location}</td>`
}
