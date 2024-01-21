const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    name: String,
    age: Number,
    email: String,
    password: String
})

const Model = mongoose.model('customers', schema)

module.exports = Model
/*
//CRIA UM REGISTRO 

const register = new Model({
    name:'João',
    age:18,
    email:"joao@gmail.com",
    password:'senhaForte123'
})

register.save()
*/