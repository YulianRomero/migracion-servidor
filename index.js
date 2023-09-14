// servidor Express

const express = require('express');
const app = express();
const port = 3000;
const host = "localhost";
const listTasks = require('./list-view-router');
const login = require('./login');
const listEdit = require ('./list-edit-router');
const validateMethod = require('./validateMethod');
app.use(express.json());
app.use(validateMethod)
app.use('/tasks', listTasks);
app.use('/tasks', listEdit);
app.use('/login', login);

app.listen(port, host, ()=>{
    console.log("Servidor encendido");
})