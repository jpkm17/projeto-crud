const router = require('express').Router()

const CustomersController = require('../controllers/customers')

const indexController = require('../controllers/index')


//rotas
router.get('/', indexController.index)

//registro
router.get('/register',CustomersController.index)
router.post('/register/add', CustomersController.add)

//Listar
router.get('/list', CustomersController.list)

//Editar
router.get('/edit', CustomersController.formEdit)
router.post('/edit/:id', CustomersController.edit)

//Remover
router.get('/remove/:id', CustomersController.remove)


module.exports = router