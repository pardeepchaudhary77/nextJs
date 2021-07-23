const express = require("express");
const app = express();
const PORT = 3001;
const cors = require("cors")

const fs = require("fs")
const path = require("path")
const filePath = path.resolve("./data.json")

const getResource = () => JSON.stringify(fs.readFileSync(filePath))

const corsoption ={
    origin: 'http://localhost:3000/',
    optionsSuccessStatus: 200
}

app.use(express.json())

app.use(cors(corsoption))

app.get("/", (req, res) => {
    res.send('Hello world')
})
app.get("/api/resource", (req, res) => {
    const resources = getResource()
    res.send(resources)
})

app.listen(PORT, () => {
    console.log("Server is lisent on port "+ PORT)
})