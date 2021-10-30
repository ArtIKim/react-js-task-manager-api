const express = require("express");
const router = express.Router();

const { getAllTasks, createTask, getTask, updateTask, deleteTask } = require("../controllers/tasks");

// app.get('/api/v1/tasks')             -get all tasks
// app.post('/api/v1/tasks')            -create a new task
// app.get('/api/v1/tasks/:id')         -get sinlge task
// app.patch('/api/v1/tasks/:id')       -update task
// app.delete('/api/v1/tasks/:id')      -get sinlge task

router.get("/", getAllTasks);
router.post("/", createTask);
router.get("/:id", getTask);
router.patch("/:id", updateTask);
router.delete("/:id", deleteTask);

// router.route("/").get(getAllTasks).post(createTask);
// router.route("/:id").get(getTask).patch(updateTask).delete(deleteTask);

module.exports = router;
