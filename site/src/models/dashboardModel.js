var database = require("../database/config");

function idade() {
    console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. dashboardModel.js linha:5");
    var instrucao = `
        SELECT 
	        COUNT(usuario.fkFaixaEtaria) AS idade,
            faixa_etaria.nome
        FROM usuario JOIN faixa_etaria
	        ON usuario.fkFaixaEtaria = faixa_etaria.id
        GROUP BY fkFaixaEtaria
        ORDER BY idade DESC
        LIMIT 1;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function praia() {
    console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. dashboardModel.js linha:22");
    var instrucao = `
        SELECT 
	        COUNT(idPraia) AS praia,
            praia.nome
        FROM usuario_praia JOIN praia
	        ON usuario_praia.idPraia = praia.id
        GROUP BY idPraia
        ORDER BY praia DESC
        LIMIT 1;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function evento() {
    console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. dashboardModel.js linha:37");
    var instrucao = `
        SELECT 
	        COUNT(usuario.fkEvento) AS evento, 
            evento.nome
        FROM usuario JOIN evento
	        ON usuario.fkEvento = evento.id
        GROUP BY fkEvento
        ORDER BY evento DESC
        LIMIT 1;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function hobbie() {
    console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. dashboardModel.js linha:51");
    var instrucao = `
        SELECT 
            COUNT(usuario.fkHobbie) AS hobbie, 
            hobbie.nome
        FROM usuario JOIN hobbie
            ON usuario.fkHobbie = hobbie.id
        GROUP BY fkHobbie
        ORDER BY hobbie DESC
        LIMIT 1;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function graficopraia() {
    console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. dashboardModel.js linha:65");
    var instrucao = `
        SELECT
            COUNT(*) AS total
        FROM usuario_praia 
        JOIN praia 
            ON praia.id = usuario_praia.idPraia
        GROUP BY praia.id
        ORDER BY praia.id ASC;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function graficoevento() {
    console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. dashboardModel.js linha:80");
    var instrucao = `
        SELECT 
            COUNT(*) AS total
        FROM usuario 
        JOIN evento
            ON evento.id = usuario.fkEvento
        GROUP BY evento.id
        ORDER BY evento.id ASC;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    idade,
    praia,
    evento,
    hobbie,
    graficopraia,
    graficoevento
};