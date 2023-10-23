/* The function accepts a list of student objects, and returns an array of the student names whose GPA of 3.5 or higher. */

// Classic function
const students = [
  { name: "Anastasia Parker", gpa: 4.0 },
  { name: "Volodymyr Zelensky", gpa: 3.2 },
  { name: "Valentyna Somova", gpa: 3.9 },
  { name: "Backhyun Park", gpa: 2.8 },
  { name: "Mason Amitie", gpa: 3.49 },
];

function filterStudents(studentList) {
  let deansList = [];
  for (let i = 0; i < students.length; i++) {
    if (students[i].gpa >= 3.5) {
      deansList.push(students[i].name);
    }
  }
  return deansList;
}

console.log(filterStudents(students)); // [ 'Anastasia Parker', 'Valentyna Somova' ]
