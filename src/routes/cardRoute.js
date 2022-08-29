const express = require("express")
const verifyJWT = require("../authentication")
const { searchAllCard, 
        createCard, 
        updateCard, 
        removeCard } = require("../controllers/cardController.js")


const router = express.Router()

router.get("/cards", verifyJWT, searchAllCard)
router.post("/cards", verifyJWT, createCard)
router.put("/cards/:id", verifyJWT, updateCard)
router.delete("/cards/:id", verifyJWT, removeCard)

module.exports = router