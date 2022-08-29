const app = require('./src/app.js')

const port = 5000;


app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`)
})