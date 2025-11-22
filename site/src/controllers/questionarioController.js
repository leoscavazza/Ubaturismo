var questionarioModel = require("../models/questionarioModel");

function cadastrar(req, res) {
    var praia = req.body.praiaServer;
    var segunda_praia = req.body.segundaPraiaServer;
    var terceira_praia = req.body.terceiraPraiaServer;
    var evento = req.body.eventoServer;
    var usuarioId = req.body.idServer;

    if (praia == undefined) {
        res.status(400).send("A praia está undefined!");
    } else if (segunda_praia == undefined) {
        res.status(400).send("A segunda praia está undefined!");
    } else if (terceira_praia == undefined) {
        res.status(400).send("A terceira praia está undefined!");
    } else if (evento == undefined) {
        res.status(400).send("O evento está undefined!");
    } else if (usuarioId == undefined) {
        res.status(400).send("O id está undefined!");
    }

    questionarioModel.cadastrar(praia, segunda_praia, terceira_praia, evento, usuarioId)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
}

module.exports = {
    cadastrar
}