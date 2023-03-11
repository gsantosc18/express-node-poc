const TaskModel = require("../model/TaskModel")

const findAll = async () => {
    return TaskModel.findAll()
}

const insert = async (task) => {
    return TaskModel.insert(task)
}

const remove = async (taskId) => {
    return TaskModel.remove(taskId)
}

module.exports = {
    findAll,
    insert,
    remove
}