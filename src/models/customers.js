const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    name: String,
    age: Number,
    email: String,
    password: String
})

const Model = mongoose.model('customers', schema)

/* 
Insere os dados na collection(tabela)
const register = new Model({
    name:"João",
    age: 18,
    email:"jotas@gmail.com",
    password:'123456'
})

register.save() 
*/

module.exports = Model