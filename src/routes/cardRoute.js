const express = require("express")
const verifyJWT = require("../authentication")
const { searchAllCard, 
        createCard, 
        updateCard, 
        removeCard } = require("../controllers/cardController.js")

const print = require("../middleware/logger.js")
const { validationExists, validationFields } = require("../middleware/validation.js")
const router = express.Router()


router.get("/cards", verifyJWT, searchAllCard)
router.post("/cards", verifyJWT, validationFields, createCard)
router.put("/cards/:id", verifyJWT, validationExists, validationFields, print, updateCard)
router.delete("/cards/:id", verifyJWT, validationExists, print, removeCard)

module.exports = router