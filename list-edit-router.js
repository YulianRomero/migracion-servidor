const express = require("express");
const tasks = require("./tareas");

const router = express.Router();


router.post("/nueva-tarea/:id/:descripcion/:estado", (req, res) => {
  const param1 = req.params.id;
  const param2 = req.params.descripcion;
  const param3 = req.params.estado;
  
  tasks.push({
      id: Number(param1),
      descripcion: param2,
      estado: param3,
    });
    res.status(200).send('tarea agregada con éxito');
});

router.delete("/eliminar-tarea/:id/", (req, res) => {
    const IdSeleccionado = req.params.id;
    const indiceTarea = tasks.findIndex((item) => item.id === Number(IdSeleccionado));
      if (indiceTarea !== -1) {
        tasks.splice(indiceTarea, 1);
        res.status(200).send('tarea eliminada con éxito');
      }else{
        res.status(404).send('No se encontró la tarea a eliminar');
      }
  });

  router.put('/actualizar-tarea/:id', (req, res) => {
    const taskId = req.params.id;
    const dataupdatedTask = req.body; 
    const updateTask = tasks.find((item) => item.id === Number(taskId));
    updateTask['descripcion'] = dataupdatedTask.descripcion;
    updateTask['estado'] = dataupdatedTask.estado;
    res.send(`Tarea con ID ${taskId} actualizada exitosamente`);
  });

module.exports = router;