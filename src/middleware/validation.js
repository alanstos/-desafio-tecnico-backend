const { findById } = require("../db/cardDB.js")


const validationExists = async (req, res, next) => {
    const card = await findById(req.params.id)
    if (!card) 
        return res.status(404).json({ message: 'No card found' })

    req.card = card

    next()
}

const validationFields = async (req, res, next) => {
    let { titulo, conteudo, lista } = req.body
    if (!(titulo && conteudo && lista)) 
        return res.status(400).json({ message: 'Invalid fields' })
    
    next()
}

module.exports = { validationExists, validationFields }