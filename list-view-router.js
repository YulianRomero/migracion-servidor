const express = require('express');
const tasks = require('./tareas');

const router = express.Router();

router.get('/', (req, res)=>{
    res.status(200).send(tasks);
  } );


router.get('/completadas', (req, res) =>{
        const tasksCompleted = tasks.filter((item) => item.estado === 'completado'); 
        if(tasksCompleted){
            res.json(tasksCompleted);
        }else{
            res.status(404).send("No hay tareas completadas");
        }
});

router.get('/pendientes', (req, res) =>{
    
    const tasksPending = tasks.filter((item) => item.estado === 'pendiente');        
    if(tasksPending){
        res.json(tasksPending);
    }else{
        res.status(404).send("no hay tareas pendientes");
    }
});

module.exports = router;