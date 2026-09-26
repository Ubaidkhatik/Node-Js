const express = require('express');
const fs = require('fs');
const app = express();

const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));


// Add Student
app.post('/addStudent', (req, res) => {

    const newStudent = {
        name: req.body.name,
        course: req.body.course,
        marks: req.body.marks
    };

    let students = [];

    if (fs.existsSync('students.json')) {
        const data = fs.readFileSync('students.json');
        students = JSON.parse(data);
    }

    students.push(newStudent);

    fs.writeFileSync('students.json', JSON.stringify(students, null, 2));

    res.send("Student Saved Successfully <br><a href='/'>Go Back</a>");
});


// Display Students
app.get('/students', (req, res) => {

    const data = fs.readFileSync('students.json');
    const students = JSON.parse(data);

    let output = "<h2>Student List</h2>";

    students.forEach((s, index) => {
        output += `
        <p>
        ${index+1}. Name: ${s.name} | Course: ${s.course} | Marks: ${s.marks}
        </p>
        `;
    });

    output += "<br><a href='/'>Add Another Student</a>";

    res.send(output);
});


app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});