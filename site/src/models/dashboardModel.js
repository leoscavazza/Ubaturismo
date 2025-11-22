const { hobbie } = require("../controllers/dashboardController");
var database = require("../database/config");

function idade() {
    console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. dashboardModel.js linha:5");
    var instrucao = `
        SELECT 
            COUNT(CASE WHEN idade >= 18 AND idade <= 25 THEN 1 END) AS entre_18_e_25,
            COUNT(CASE WHEN idade >= 26 AND idade <= 35 THEN 1 END) AS entre_26_e_35,
            COUNT(CASE WHEN idade >= 36 AND idade <= 45 THEN 1 END) AS entre_36_e_45,
            COUNT(CASE WHEN idade >= 46 AND idade <= 55 THEN 1 END) AS entre_46_e_55,
            COUNT(CASE WHEN idade >= 56 AND idade <= 65 THEN 1 END) AS entre_56_e_65,
            COUNT(CASE WHEN idade >= 66 AND idade <= 75 THEN 1 END) AS entre_66_e_75,
            COUNT(CASE WHEN idade >= 76 AND idade <= 85 THEN 1 END) AS entre_76_e_85
        FROM usuario;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function praia() {
    console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. dashboardModel.js linha:22");
    var instrucao = `
        SELECT 
            COUNT(CASE WHEN idPraia = 1 THEN 1 END) AS estaleiro,
            COUNT(CASE WHEN idPraia = 2 THEN 1 END) AS maranduba,
            COUNT(CASE WHEN idPraia = 3 THEN 1 END) AS fortaleza,
            COUNT(CASE WHEN idPraia = 4 THEN 1 END) AS felix,
            COUNT(CASE WHEN idPraia = 5 THEN 1 END) AS pereque
        FROM usuario_praia;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function evento() {
    console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. dashboardModel.js linha:37");
    var instrucao = `
        SELECT 
            COUNT(CASE WHEN fkEvento = 1 THEN 1 END) AS festival,
            COUNT(CASE WHEN fkEvento = 2 THEN 1 END) AS aquario,
            COUNT(CASE WHEN fkEvento = 3 THEN 1 END) AS passeio,
            COUNT(CASE WHEN fkEvento = 4 THEN 1 END) AS balada
        FROM usuario;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function hobbie() {
    console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. dashboardModel.js linha:51");
    var instrucao = `
        SELECT 
	        COUNT(CASE WHEN fkHobbie = 1 THEN 1 END) AS passeio,
            COUNT(CASE WHEN fkHobbie = 2 THEN 1 END) AS sorvete,
            COUNT(CASE WHEN fkHobbie = 3 THEN 1 END) AS passeio,
            COUNT(CASE WHEN fkHobbie = 4 THEN 1 END) AS futevolei
        FROM usuario;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function graficopraia() {
    console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. dashboardModel.js linha:65");
    var instrucao = `
        SELECT 
            COUNT(CASE WHEN idPraia = 1 THEN 1 END) AS estaleiro,
            COUNT(CASE WHEN idPraia = 2 THEN 1 END) AS maranduba,
            COUNT(CASE WHEN idPraia = 3 THEN 1 END) AS fortaleza,
            COUNT(CASE WHEN idPraia = 4 THEN 1 END) AS felix,
            COUNT(CASE WHEN idPraia = 5 THEN 1 END) AS pereque
        FROM usuario_praia;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function graficoevento() {
    console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. dashboardModel.js linha:80");
    var instrucao = `
        SELECT 
            COUNT(CASE WHEN fkEvento = 1 THEN 1 END) AS festival,
            COUNT(CASE WHEN fkEvento = 2 THEN 1 END) AS aquario,
            COUNT(CASE WHEN fkEvento = 3 THEN 1 END) AS passeio,
            COUNT(CASE WHEN fkEvento = 4 THEN 1 END) AS balada
        FROM usuario;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    idade,
    praia,
    evento,
    graficopraia,
    graficoevento
};