var express = require("express");
var router = express.Router();

var dashboardController = require("../controllers/dashboardController");

router.get("/idade", function (req, res) {
    dashboardController.idade(req, res);
});

router.get("/praia", function (req, res) {
    dashboardController.praia(req, res);
});

router.get("/evento", function (req, res) {
    dashboardController.evento(req, res);
});

router.get("/hobbie", function (req, res) {
    dashboardController.hobbie(req, res);
});

router.get("/graficopraia", function (req, res) {
    dashboardController.graficopraia(req, res);
});

router.get("/graficoevento", function (req, res) {
    dashboardController.graficoevento(req, res);
});

module.exports = router;