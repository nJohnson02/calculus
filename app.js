const express = require("express")
const app = express()
const port = 8080

app.use(express.static(__dirname + "/public"))

app.get("/", (req, res) => {
    res.sendFile("index.html")
})

app.listen(port, () => {
    console.log("Running on port: " + port)
})

