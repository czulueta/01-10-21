const mongoose = require("mongoose")
const Schema = mongoose.Schema

const newSchema = new Schema({
    trash: {
        type: String
    },
    sweeping: {
        type: String
    },
    vacuuming: {
        type: String
    },
    mopping: {
        type: String
    },
    washingDishes: {
        type: String
    },

})
module.exports = mongoose.model("Chore", newSchema)