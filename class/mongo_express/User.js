const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Any = new Schema({ any: Schema.Type.Mixed });

const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    avatar: { type: String },
    date: { type: Date,
        default: Date.now() }
    }),
    
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
    }
    }
    
    
}),    
    module.exports = User = mongoose.model("users", UserSchema);