const jwt = require('jsonwebtoken')
const createUserToken = async(cliente, req, res) =>{
    /* Criação do token */
    const token = jwt.sign({
        nome: cliente.nome,
        id: cliente._id
    }, "mysecret")

    /* Retornar token */
    res.status(200).json({mensagem:"Você está autenticado",
        token:token,
        clienteId: cliente._id
    })
}
module.exports = createUserToken