var database = require("../database/config");

function cadastrar(praia, segunda_praia, terceira_praia, evento, usuarioId) {
    var instrucao = `
        INSERT INTO usuario_praia (idUsuario, idPraia) VALUES (${usuarioId}, ${praia}), (${usuarioId}, ${segunda_praia}), (${usuarioId}, ${terceira_praia});
    `;
    var segundaInstrucao = `
        UPDATE usuario SET fkEvento = ${evento} WHERE id = ${usuarioId};
    `;

    console.log("Executando a instrução SQL: \n" + instrucao);
    database.executar(instrucao);
    return database.executar(segundaInstrucao);
}

module.exports = {
    cadastrar
};