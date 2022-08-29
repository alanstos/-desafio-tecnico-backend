let myLogger = (req, res, next) => {
    console.log('LOGGED=' + new Date())
    next()
}

module.exports = myLogger
//export default myLogger;