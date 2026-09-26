const express = require('express');
const app = express();

const PORT = 3002

const students = [

{ id: 1, name: "Vijay", course: "MCA", marks: 93 },
{ id: 1, name: "Anthony", course: "BCA", marks: 85 },
{ id: 1, name: "Amit", course: "BCA", marks: 90 },
{ id: 1, name: "Roman", course: "MCA", marks: 89 },
            


];
app.get ('/',(req, res)=>{
    res.send("<h2> Welcome to Student   Information App</h2> <br> Go to /students to see students details ")

});

app.get ('/students',(req, res)=>{
    let html = "<h2> Student Information </h2>";
    html += "<table border= '1'><tr><th>ID</th><th>Name</th><th>Course</th><th>Marks</th></tr>"

    students.forEach(s =>{
        html += `<tr>
                <td>${s.id}</td>
                <td>${s.name}</td>
                <td>${s.course}</td>
                <td>${s.marks}</td>
                </tr>
        
        `
    })
   


             html +="</table>";
             res.send(html)

        })
        app.listen(PORT, ()=>{
            console.log(`Server running at http://localhost:${PORT}`)
        })