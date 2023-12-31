const mongoose = require('mongoose');
const ProductSchema = new mongoose.Schema({
    name:{
        type:String,
        required :true
    },
    description:{
        type:String,
        required :true
    },
    unitPrice:{
        type:String,
        required :true
    },
    qtyOnHand:{
        type:Boolean,
        required :true
    },

});
module.exports = mongoose.model('product',ProductSchema);
