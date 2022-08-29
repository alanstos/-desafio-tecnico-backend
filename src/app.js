require('dotenv').config()
const express = require("express")
const cors = require("cors")
const routes = require("./routes/index.js")


const app = express()
app.use(express.json())
app.use(cors())
routes(app)

module.exports = app