const mongoose = require('../db/conecta')
const { Schema } = mongoose
const Produto = mongoose.model(
    'Produto',
    new Schema({
        sku: {type:String, required: true},
        marca: {type:String, required:true},
        descricao: {type: String, required: true},
        preco: {type:Number, required: true},
        dataFabricacao: {type:Date, required:true}, 
    },
    {timestamps:true},
)
)
module.exports = Produto