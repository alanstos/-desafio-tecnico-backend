const cardRoute = require("./cardRoute.js")
const loginRoute = require("./loginRoute.js")

const routes = (app) => {

  app.use(
    cardRoute,
    loginRoute
  )
}

module.exports = routes