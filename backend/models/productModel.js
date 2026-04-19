import mongoose from "mongoose";

const productSchema = mongoose.Schema({
    name: {type: String, required: true},
    Description: {type: String, required: true},
    price: {type: Number, required: true},
    image:{type: Array, required: true},
    category: {type: String, required: true},
    subCategory:{type: String, require: true},
    sizes: {type: Array, required: true},
    bestseller: {type: Boolean},
    date: {type:Number, required: true}

})

const productModel = mongoose.models.product || mongoose.model("product", productSchema)
export default productModel