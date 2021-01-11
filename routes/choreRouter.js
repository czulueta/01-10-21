const express = require("express")
const choreRouter = express.Router()
const Chore = require("../models/chore.js")

choreRouter.get("/", (req, res, next) => {
    Chore.find((err, chores) => {
        if(err){
            res.send(500)
            return next(err)
        }
        return res.status(200).send(chores)
    })
})
module.exports = choreRouter