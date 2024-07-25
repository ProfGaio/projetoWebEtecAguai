const router = require('express').Router()

const ClienteController = 
require('../controllers/ClienteController')

router.post('/registrar', ClienteController.registrar)
router.post('/login', ClienteController.login)
//NOVA ROTA A PARTIR DE 25/07/2024
router.get('/checkuser', ClienteController.verificaUsuario)

module.exports = router
