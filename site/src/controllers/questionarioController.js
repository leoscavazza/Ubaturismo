var questionarioModel = require("../models/questionarioModel");

function listar(req, res) {
    questionarioModel.listar().then(function(resultado){
        // precisamos informar que o resultado voltará para o front-end como uma resposta em json
        res.status(200).json(resultado);
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

function cadastrar(req, res) {
    var praia = req.body.praia;
    var segunda_praia = req.body.segunda_praia;
    var terceira_praia = req.body.terceira_praia;
    var evento = req.body.evento;

    if (praia == undefined) {
        res.status(400).send("A praia está undefined!");
    } else if (segunda_praia == undefined) {
        res.status(400).send("A segunda praia está undefined!");
    } else if (terceira_praia == undefined) {
        res.status(400).send("A terceira praia está undefined!");
    } else if (evento == undefined) {
        res.status(400).send("O evento está undefined!");
    }

    questionarioModel.cadastrar(praia, segunda_praia, terceira_praia, evento).then(function(resposta){
        res.status(200).send("Respostas do questionario criadas com sucesso");
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

module.exports = {
    listar,
    cadastrar
}