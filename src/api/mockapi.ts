import axios from "axios"
import MockAdapter from "axios-mock-adapter"

export interface Student {
    id: number;
    name: string;
    email: string;
    course: string;
}

 const students: Student[] = [
  { id: 1, name: 'Alice', email: 'alice@example.com', course: 'CSE' },
  { id: 2, name: 'Bob', email: 'bob@example.com', course: 'ECE' },
  { id: 3, name: 'Charlie', email: 'charlie@example.com', course: 'IT' },
  { id: 4, name: 'Diana', email: 'diana@example.com', course: 'Arch' },
  { id: 5, name: 'Ethan', email: 'ethan@example.com', course: 'CSE' },
  { id: 6, name: 'Fiona', email: 'fiona@example.com', course: 'ECE' },
  { id: 7, name: 'George', email: 'george@example.com', course: 'IT' },
  { id: 8, name: 'Hannah', email: 'hannah@example.com', course: 'CSE' },
  { id: 9, name: 'Ian', email: 'ian@example.com', course: 'ECE' },
  { id: 10, name: 'Jasmine', email: 'jasmine@example.com', course: 'Arch' },
  { id: 11, name: 'Kevin', email: 'kevin@example.com', course: 'CSE' },
  { id: 12, name: 'Laura', email: 'laura@example.com', course: 'IT' },
  { id: 13, name: 'Mike', email: 'mike@example.com', course: 'ECE' },
  { id: 14, name: 'Nina', email: 'nina@example.com', course: 'Arch' },
  { id: 15, name: 'Oscar', email: 'oscar@example.com', course: 'CSE' },
  { id: 16, name: 'Paula', email: 'paula@example.com', course: 'ECE' },
  { id: 17, name: 'Quinn', email: 'quinn@example.com', course: 'IT' },
  { id: 18, name: 'Rachel', email: 'rachel@example.com', course: 'CSE' },
  { id: 19, name: 'Sam', email: 'sam@example.com', course: 'ECE' },
  { id: 20, name: 'Tina', email: 'tina@example.com', course: 'Arch' },
];


const mock = new MockAdapter(axios, { delayResponse: 1000 });

mock.onGet('/students').reply(200, students);

mock.onPost('/students').reply(config => {
    const newStudent: Omit<Student, 'id'> = JSON.parse(config.data);
    const newStudentWithId: Student = {
      id: students.length + 1,
      ...newStudent,
    };
    students.push(newStudentWithId);
    return [201, newStudentWithId];
  });

  export default axios;