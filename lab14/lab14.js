const express = require('express');
const app = express();

app.use(express.json());
app.use(express.static('public'));

const PORT = 3005;

// Student data
let students = [
    { id: 1, name: "Rahul", course: "BCA", marks: 85 },
    { id: 2, name: "Sneha", course: "MCA", marks: 90 },
    { id: 3, name: "Amit", course: "BTech", marks: 78 }
];

// Display students
app.get('/students', (req, res) => {
    res.json(students);
});

// Update student
app.put('/students/:id', (req, res) => {

    const id = parseInt(req.params.id);

    const student = students.find(s => s.id === id);

    if (!student) {
        return res.send("Student Not Found");
    }

    if(req.body.name) student.name = req.body.name;
    if(req.body.course) student.course = req.body.course;
    if(req.body.marks) student.marks = req.body.marks;

    res.send("Student Updated Successfully");
});

// Delete student
app.delete('/students/:id', (req, res) => {

    const id = parseInt(req.params.id);
    students = students.filter(s => s.id !== id);

    res.send("Student Deleted Successfully");
});

app.listen(PORT, () => {
    console.log("Server running at http://localhost:3005");
});