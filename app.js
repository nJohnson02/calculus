const express = require("express")
const app = express()
const port = process.env.PORT || 8080

const views = __dirname + "/public/views/"

app.use(express.static(__dirname + "/public"))

app.get("/", (req, res) => {
    res.sendFile("index.html")
})

app.get("/limits", (req, res) => {
    res.sendFile(views + "limits.html")
})

app.get("/derivatives", (req, res) => {
    res.sendFile(views + "derivatives.html")
})

app.get("/integrals", (req, res) => {
    res.sendFile(views + "integrals.html")
})

app.get("/programs", (req, res) => {
    res.sendFile(views + "programs.html")
})

app.listen(port, () => {
    console.log("Running on port: " + port)
})

