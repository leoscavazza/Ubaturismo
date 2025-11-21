var express = require("express");
var router = express.Router();

var questionarioController = require("../controllers/questionarioController");

router.post("/cadastrar", function (req, res) {
    // função a ser chamada quando acessar /carros/cadastrar
    questionarioController.cadastrar(req, res);
});

router.get("/listar", function (req, res) {
    // função a ser chamada quando acessar /carros/listar
    questionarioController.listar(req, res);
});

module.exports = router;