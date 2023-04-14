import express from 'express';

const app=express();

const students = [
    {
        id: 1,
        name: "yousef",
        city: "cairo"
    },
    {
        id: 2,
        name: "mohamed",
        city: "alex"
    },
    {
        id: 3,
        name: "ali",
        city: "menofia"
    },
]


const studentsFunction=(request,response)=>{

    let output ="<ul>";

    output+="<h1>Students</h1>";

    for(let i=0;i<students.length;i++)
    {
        const student=students[i];
        output+="<li>"+student.name+"</li>";
    }

    output+="</ul>";
response.send(output);
};

app.get('/students',studentsFunction);




app.listen(5000);
