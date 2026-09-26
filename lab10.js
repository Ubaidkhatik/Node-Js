const express = require('express');
const app = express();
app.use(express.json()); 
let students = [
    { id: 1, name: "Rahul", course: "BCA", div:"A", rollno:143, },
    { id: 2, name: "Sneha", course: "MCA" , div:"A", rollno:24},
     { id: 3, name: "Ubaid", course: "MCA" , div:"B", rollno:164},
      { id: 4, name: "Huzaif", course: "MCA" , div:"B", rollno:146},
       { id: 5, name: "Afroz", course: "MCA" , div:"B", rollno:187}   ];
app.get('/students', (req, res) => {
    res.json(students);
});  app.get('/students/:id', (req, res) => {
    const student = students.find(s => s.id == req.params.id);
    res.json(student);
});
app.post('/students', (req, res) => {
    students.push(req.body);
    res.send("Student added successfully");
});  
app.put('/students/:id', (req, res) => {
    const index = students.findIndex(s => s.id == req.params.id);
    students[index] = req.body;
    res.send("Student updated successfully");  });
app.delete('/students/:id', (req, res) => {
    students = students.filter(s => s.id != req.params.id);
    res.send("Student deleted successfully");
});  app.get('/',(req,res)=>{
    res.send("Student API is running successfuly");
});  app.listen(6102, () => {
 console.log("Server running on http://localhost:6102");
});


