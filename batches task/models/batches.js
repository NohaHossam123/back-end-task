const mongoose = require('mongoose');

const enumColors = {
    values: ['red','blue','black','green'],
    message: 'the colors which allowed are red, blue, black, green with small letters...',
}

const enumSizes = {
    values: ['S','M','L','XL'],
    message: 'the sizes which allowed are S, M, L,XL with capital letters...'
}

const batchSchema = new mongoose.Schema({
    number:{ type : Number, min: 1, unique : true, required: true},
    size:{ type : String, enum : enumSizes, required: true },
    color:{ type : String, enum : enumColors, required: true },
    quantity:{ type: Number, min: 1, required: true },
})

const BatchModel = mongoose.model('Batch', batchSchema);
module.exports = BatchModel ;