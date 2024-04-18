const mongoose = require("mongoose")
const penSchema = mongoose.Schema({
pen_brand: String,
ink_color: {
    type: String,
    minlength: 1,
    maxlength: 15,
},
cost: {
    type: Number,
    min :1,
    max:20,
}
})
module.exports = mongoose.model("pen",
penSchema)
