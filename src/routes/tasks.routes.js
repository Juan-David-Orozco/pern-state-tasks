const { Router } = require("express");
const pool = require('../db')

const router = Router();

/*
router.get('/', (req, res) => {
  res.send('Hola mundo');
});

router.get('/tasks', (req, res) => {
  res.send('Retornando lista tareas');
});
*/

router.get('/tasks', async (req, res) => {
  const query = `SELECT NOW()`
  const result = await pool.query(query)
  res.json(result.rows[0].now)
});

router.get('/tasks/10', (req, res) => {
  res.send('Retornando tarea');
});

router.post('/tasks', (req, res) => {
  res.send('Creando tarea');
});

router.delete('/tasks', (req, res) => {
  res.send('Eliminando tarea');
});

router.put('/tasks', (req, res) => {
  res.send('Actualizando tarea');
});

module.exports = router