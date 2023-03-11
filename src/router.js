const express = require("express")

const router = express.Router()
const TaskController = require("./controller/TaskController")

router.get('/task', TaskController.index)
router.post("/task", TaskController.insert)
router.delete("/task/:id", TaskController.remove)

module.exports = router