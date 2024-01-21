const CustomersModel = require('../models/customers')

function add(req, res) {
    const {
        name,
        age,
        email,
        password,
    } = req.body
    s
    const register = new CustomersModel({
        name,
        age,
        email,
        password
    })

    register.save()

    res.end()
}

module.exports = {
    add
}