var database = require("../database/config");

function listar() {
    var instrucao = `
        SELECT * FROM carro;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function cadastrar(praia, segunda_praia, terceira_praia, evento) {
    var instrucao = `
        INSERT INTO usuario_praia (idUsuario, idPraia) VALUES ('${idUsuario}', '${praia}'), ('${idUsuario}', '${segunda_praia}'), ('${idUsuario}', '${terceira_praia}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    cadastrar,
    listar
};