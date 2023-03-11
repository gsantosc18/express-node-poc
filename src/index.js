const PORT = process.env.APP_PORT || 3000

const app = require("./app")

app.listen(PORT, () => console.log("Server running"))