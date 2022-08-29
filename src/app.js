require('dotenv').config()
const express = require("express")
const cors = require("cors")
const routes = require("./routes/index.js")
const middleware = require("./middleware/index.js")


const app = express()
app.use(express.json())
app.use(cors())
middleware(app)
routes(app)

module.exports = app