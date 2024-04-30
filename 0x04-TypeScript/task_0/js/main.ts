// Create a Student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}
// Create array with two students
const studentsList = [
  {
    firstName: "John",
    lastName: "Doe",
    age: 20,
    location: "New York",
  },
  {
    firstName: "Jane",
    lastName: "Smith",
    age: 22,
    location: "Los Angeles",
  },
];

function renderTable() {
  const table = document.createElement("table");
  studentsList.forEach((student) => {
    const row = table.insertRow();
    const firstNameCell = row.insertCell();
    firstNameCell.innerHTML = student.firstName;
    const locationCell = row.insertCell();
    locationCell.innerHTML = student.location;
  });
  document.body.appendChild(table);
}

renderTable();
