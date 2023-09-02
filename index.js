// servidor Express

const express = require('express');
const app = express();
const port = 3000;
const host = "localhost";
const listTasks = require('./list-view-router');
const listEdit = require ('./list-edit-router')
app.use(express.json());

app.use('/tasks', listTasks);
app.use('/tasks', listEdit);

app.listen(port, host, ()=>{
    console.log("Servidor encendido");
})