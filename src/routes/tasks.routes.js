const { Router } = require("express");

const {
  createTask,
  getAllTasks,
  getTask,
  updateTask,
  deleteTask,
} = require("../controllers/tasks.controller");

const router = Router();

/*
router.get('/', (req, res) => {
  res.send('Hola mundo');
});

router.get('/tasks', async (req, res) => {
  const query = `SELECT NOW()`
  const result = await pool.query(query)
  res.json(result.rows[0].now)
});
*/

router.get("/tasks", getAllTasks);
//router.get('/tasks', (req, res) => {res.send('Retornando lista tareas');});

router.get("/tasks/:id", getTask);
//router.get('/tasks/10', (req, res) => {res.send('Retornando tarea');});

router.post("/tasks", createTask);
//router.post('/tasks', (req, res) => {res.send('Creando tarea');});

router.delete("/tasks/:id", deleteTask);
//router.delete('/tasks', (req, res) => {res.send('Eliminando tarea');});

router.put("/tasks/:id", updateTask);
//router.put('/tasks', (req, res) => {res.send('Actualizando tarea');});

module.exports = router