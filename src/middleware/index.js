const myLogger = require("./logged.js")

const middleware = (app) => {

  app.use(
    myLogger
  )
}

module.exports = middleware