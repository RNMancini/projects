const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const stockSchema = new Schema({
    symbol: {
        name: { type: String,
        unique: true,
        required: true,
    },
    
    price: { type: Number },
    
    open: { type: Boolean },
    
    percentage: { type: Array },
    
    currency: { type: String },
    
    order: { type: [{
        orderID: { type: String },
        date: { type: Date, default: Date.now },
        symbol: { type: String }, 
    }]
  
    
    
})    
    module.exports = Stock = mongoose.model("stocks", StockSchema);