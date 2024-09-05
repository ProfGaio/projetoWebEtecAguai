//IMPORTANDO MODEL PARA MONGODB DO PRODUTO 
const Produto = require('../models/Produto')

/* CLASSE ProdutoController */
module.exports = class ProdutoController{
    /* Métodos estáticos para serem chamados 
    com a classe ProdutoController  */

    /* MÉTODO CADASTRAR  */
    static async cadastrar(req, res){
        const sku = req.body.sku
        const marca = req.body.marca
        const descricao = req.body.descricao
        const preco = req.body.preco
        const dataFabricacao = 
        req.body.dataFabricacao
        /* Validações */
        if(!sku){
            res.status(422).json({mensagem: "O código sku é obrigatório"})
            return
        }

        if(!marca){
            res.status(422).json({mensagem: "A marca é obrigatória"})
            return
        }

        if(!descricao){
            res.status(422).json({mensagem: "A descrição é obrigatório"})
            return
        }

        if(!preco){
            res.status(422).json({mensagem: "O preço é obrigatório"})
            return
        }

        if(!dataFabricacao){
            res.status(422).json({mensagem: "A data de fabricação é obrigatória"})
            return
        }

        /* Verifica existência de produto */
        const produtoExiste = await Produto.findOne({sku:sku})

        if(produtoExiste){
            res.status(422).json({mensagem: "Produto já cadastrado!"})
            return
        }
        /* Cadastro de produto */
        const produto = new Produto({sku,marca,descricao,
            preco,dataFabricacao})

        try {
            const novoProduto = await produto.save()
        } catch (erro) {
            res.status(500).json({mensagem: erro})
        }
    }/* fim do método cadastrar */

    /* método buscarTodos (os produtos) */
    static async buscarTodos(req,res){
        const produtos = await Produto.find().sort('-createdAt')
        res.status(200).json({
          produtos: produtos  
        })
    }
} /* fim da classe ProdutoController  */