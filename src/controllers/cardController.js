
const { findAll, create, update, remove } = require("../db/cardDB.js")

let searchAllCard = async (req, res) => {
    console.log('listCard ...')
    const cards = await findAll()
    res.send(cards);
}

let createCard = async (req, res) => {
    console.log("create card...")
    const card = await create(req.body)
    res.status(201).send(card);
}

let updateCard = async (req, res) => {
    console.log("update card...")
    const card = await update(req.params.id, req.body)
    res.send(card);
}

let removeCard = async (req, res) => {
    console.log("remove card...")
    const cards = await remove(req.params.id)
    res.send(cards);
}

module.exports = { searchAllCard, createCard, updateCard, removeCard }