const { ObjectId } = require("mongodb")
const connection = require("../infra/mongodb")

async function findAll() {
    const db = await connection()
    return db.collection("tasks").find().toArray()
}

async function insert(task) {
    const db = await connection()
    const { insertedId } = await db.collection("tasks").insertOne(task)
    return insertedId
}

async function remove(taskId) {
    const db = await connection()
    return db.collection("tasks").deleteOne({_id: new ObjectId(taskId)})
}

module.exports = {
    findAll,
    insert,
    remove
}