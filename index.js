// servidor Express

const express = require('express');
const app = express();
const port = 3000;
const host = "localhost";

// Definir la lista de tareas
const tasks = [
    { id: 1, descripcion: 'ir al gimnacio', estado: "pendiente" },
    { id: 2, descripcion: 'capacitacion trabajo en altuuras', estado: "completado" },
    { id: 3, descripcion: 'reunion familiar', estado: "pendiente" }
  ];


app.get('/', (req, res)=>{
    res.status(200).send(tasks);
  } )

app.listen(port, host, ()=>{
    console.log("Servidor encendido");
})