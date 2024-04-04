const mongoose = require("mongoose")
const penSchema = mongoose.Schema({
pen_brand: String,
ink_color: String,
cost: Number
})
module.exports = mongoose.model("pen",
penSchema)