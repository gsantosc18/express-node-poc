const { MongoClient, ObjectId } = require("mongodb")
require("dotenv").config()

let instanceDb

const connection = async () => {
    if(!instanceDb) {
        console.log("Iniciando a conexão com o banco");
        const client = new MongoClient(process.env.MONGO_HOST)
        await client.connect()
        instanceDb = await client.db(process.env.MONGO_DATABASE)
        console.log("Conexão iniciada com sucesso");
    }
    return instanceDb
};

module.exports = connection