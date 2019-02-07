const mongoose = require('mongoose');

let gridSchema = mongoose.Schema({
    number1: Number, 
    number2: Number, 
    number3: Number,
    number4: Number,
    number5: Number,
    star: Number, 
});

module.exports = gridSchema;