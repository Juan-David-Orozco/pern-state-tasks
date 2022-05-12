//const pool = require('../db')

const getAllTasks = async (req, res, next) => {
  res.send('Retornando lista tareas');
  /*
  try {
    const allTasks = await pool.query("SELECT * FROM task");
    res.json(allTasks.rows);
  } catch (error) {
    next(error);
  }
  */
};

const getTask = (req, res) => {
  res.send('Retornando tarea');
}

const createTask = async (req, res, next) => {
  res.send('Creando tarea')
};

const updateTask = async (req, res) => {
  res.send('Actualizando tarea')
};

const deleteTask = async (req, res) => {
  res.send('Eliminando tarea')
};


module.exports = {
  createTask,
  getAllTasks,
  getTask,
  updateTask,
  deleteTask,
};