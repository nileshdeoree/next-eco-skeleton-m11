const mongoose = require ('mongoose')


const OrderSchema = new mongoose.Schema({
    name: {type: String, required: true},
    qty : {type: Number, required: true},
    price: {type: Number, required: true},
    size: {type: String, required : true},
    variant: {type: String, required: true}
})

mongoose.models = {}
export default mongoose.model("Order", OrderSchema)