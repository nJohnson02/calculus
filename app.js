const express = require("express")
const app = express()
const port = process.env.PORT || 8080

app.use(express.static(__dirname + "/public"))

app.get("/", (req, res) => {
    res.sendFile("index.html")
})

app.get("/limits", (req, res) => {
    res.sendFile(__dirname + "/public/views/limits.html")
})

app.get("/derivatives", (req, res) => {
    res.sendFile(__dirname + "/public/views/derivatives.html")
})

app.get("/integrals", (req, res) => {
    res.sendFile(__dirname + "/public/views/integrals.html")
})

app.get("/programs", (req, res) => {
    res.sendFile(__dirname + "/public/views/programs.html")
})

app.listen(port, () => {
    console.log("Running on port: " + port)
})

