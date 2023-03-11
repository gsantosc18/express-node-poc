const TaskService = require("../service/TaskService")
const TaskController = {
    async index(request, response) {
        const tasks = await TaskService.findAll()
        return response.status(200).json(tasks)
    },
    async insert(request, response) {
        const task = request.body
        return response
            .status(200)
            .json({
                id: await TaskService.insert(task)
            })
    },
    async remove(request, response) {
        const taskId = request.params.id
        console.log("Removido id:", taskId)
        await TaskService.remove(taskId)
        return response.status(200).json({message: "OK"})
    }
}

module.exports = TaskController