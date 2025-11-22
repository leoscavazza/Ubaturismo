var express = require("express");
var router = express.Router();

var questionarioController = require("../controllers/questionarioController");

router.post("/cadastrar", function (req, res) {
    // função a ser chamada quando acessar /carros/cadastrar
    questionarioController.cadastrar(req, res);
});


module.exports = router;