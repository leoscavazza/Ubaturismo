var nome_idade = '';

function kpiIdade() {
    const textoIdade = document.getElementById("texto_idade");
    fetch(`/dashboard/idade`, {
        method: "GET"
    }).then(function (resposta) {
        if (resposta.ok) {
            resposta.json().then(json => {
                console.log(json);
                nome_idade = json.nome;
                if (nome_idade == 'Entre 18 e 25 anos') {
                    textoIdade.innerHTML = `Entre 18 e 25 anos`;
                } else if (nome_idade == 'Entre 26 e 35 anos') {
                    textoIdade.innerHTML = `Entre 26 e 35 anos`;
                } else if (nome_idade == 'Entre 36 e 45 anos') {
                    textoIdade.innerHTML = `Entre 36 e 45 anos`;
                } else if (nome_idade == 'Entre 46 e 55 anos') {
                    textoIdade.innerHTML = `Entre 46 e 55 anos`;
                } else if (nome_idade == 'Entre 56 e 65 anos') {
                    textoIdade.innerHTML = `Entre 56 e 65 anos`;
                } else if (nome_idade == 'Entre 66 e 75 anos') {
                    textoIdade.innerHTML = `Entre 66 e 75 anos`;
                } else if (nome_idade == 'Entre 76 e 85 anos') {
                    textoIdade.innerHTML = `Entre 76 e 85 anos`;
                } else if (nome_idade == 'Entre 86 e 95 anos') {
                    textoIdade.innerHTML = `Entre 86 e 95 anos`;
                } else {
                    console.log('Elemento KPI não encontrado!');
                }
            });
        } else {
            console.error("Erro ao buscar idade na KPI.");
            exibirIdadeNaKpi(0);
        }
    }).catch(function (erro) {
        console.log(erro);
    });
}

var nome_praia = '';

function kpiPraia() {
    const textoPraia = document.getElementById("texto_praia");
    fetch(`/dashboard/praia`, {
        method: "GET"
    }).then(function (resposta) {
        if (resposta.ok) {
            resposta.json().then(json => {
                console.log(json);
                nome_praia = json.nome;
                if (nome_praia == 'Praia do Estaleiro do Padre') {
                    textoPraia.innerHTML = `Praia do Estaleiro do Padre`;
                } else if (nome_praia == 'Praia de Maranduba') {
                    textoPraia.innerHTML = `Praia de Maranduba`;
                } else if (nome_praia == 'Praia de Fortaleza') {
                    textoPraia.innerHTML = `Praia de Fortaleza`;
                } else if (nome_praia == 'Praia do Félix') {
                    textoPraia.innerHTML = `Praia do Félix`;
                } else if (nome_praia == 'Praia do Perequê Açu') {
                    textoPraia.innerHTML = `Praia do Perequê Açu`;
                } else {
                    console.log('Elemento KPI não encontrado!');
                }
            });
        } else {
            console.error("Erro ao buscar praia na KPI.");
            exibirPraiaNaKpi(0);
        }
    }).catch(function (erro) {
        console.log(erro);
    });
}

var nome_evento = '';

function kpiEvento() {
    const textoEvento = document.getElementById("texto_evento");
    fetch(`/dashboard/evento`, {
        method: "GET"
    }).then(function (resposta) {
        if (resposta.ok) {
            resposta.json().then(json => {
                console.log(json);
                nome_evento = json.nome;
                if (nome_evento == 'Festival de Verão') {
                    textoEvento.innerHTML = `Festival de Verão`;
                } else if (nome_evento == 'Visita ao Aquário de Ubatuba') {
                    textoEvento.innerHTML = `Visita ao Aquário de Ubatuba`;
                } else if (nome_evento == 'Passeio na feirinha do Centro de Ubatuba') {
                    textoEvento.innerHTML = `Passeio na Feirinha`;
                } else if (nome_evento == 'Balada no Cafe de La Musique') {
                    textoEvento.innerHTML = `Balada no Cafe de La Musique`;
                } else {
                    console.log('Elemento KPI não encontrado!');
                }
            });
        } else {
            console.error("Erro ao buscar evento na KPI.");
            exibirEventoNaKpi(0);
        }
    }).catch(function (erro) {
        console.log(erro);
    });
}

var nome_hobbie = '';

function kpiHobbie() {
    const textoHobbie = document.getElementById("texto_hobbie");
    fetch(`/dashboard/hobbie`, {
        method: "GET"
    }).then(function (resposta) {
        if (resposta.ok) {
            resposta.json().then(json => {
                console.log(json);
                nome_hobbie = json.nome;
                if (nome_hobbie == 'Caminhada na praia') {
                    textoHobbie.innerHTML = `Caminhada na praia`;
                } else if (nome_hobbie == 'Tomar sorvete no passeio') {
                    textoHobbie.innerHTML = `Tomar sorvete no passeio`;
                } else if (nome_hobbie == 'Passear na feirinha') {
                    textoHobbie.innerHTML = `Passear na feirinha`;
                } else if (nome_hobbie == 'Jogar vôlei ou futevôlei') {
                    textoHobbie.innerHTML = `Jogar vôlei ou futevôlei`;
                } else {
                    console.log('Elemento KPI não encontrado!');
                }
            });
        } else {
            console.error("Erro ao buscar hobbie na KPI.");
        }
    }).catch(function (erro) {
        console.log(erro);
    });
}

var dadosPraia = [];

function graficosPraias() {
    fetch(`/dashboard/graficopraia`, {
        method: "GET"
    }).then(function (resposta) {
        if (resposta.ok) {
            resposta.json().then(json => {
                console.log(json);
                for (let contador = 0; contador < json.length; contador++) {
                    dadosPraia.push(json[contador].total);
                }

                const ctx1 = document.getElementById('myChart1');

                new Chart(ctx1, {
                    type: 'pie',
                    data: {
                        labels: [
                            'Estaleiro do Padre',
                            'Maranduba',
                            'Fortaleza',
                            'Félix',
                            'Perequê-Acu'
                        ],
                        datasets: [{
                            label: 'Interessados na praia',
                            data: dadosPraia,
                            backgroundColor: [
                                '#020e4b',
                                '#083b14',
                                '#ffcc55ff',
                                '#5e6bacff',
                                '#50845cff'
                            ],
                            hoverOffset: 4
                        },]
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false
                    }
                });
            });
        } else {
            console.error("Erro ao buscar a praia no grafico.");
            exibirPraiaNoGrafico(0);
        }
    }).catch(function (erro) {
        console.log(erro);
    });
}

var dadosEvento = [];

function graficosEventos() {
    fetch(`/dashboard/graficoevento`, {
        method: "GET"
    }).then(function (resposta) {
        if (resposta.ok) {
            resposta.json().then(json => {
                console.log(json);
                for (let contador = 0; contador < json.length; contador++) {
                    dadosEvento.push(json[contador].total);
                }

                const ctx2 = document.getElementById('myChart2');

                new Chart(ctx2, {
                    type: 'pie',
                    data: {
                        labels: [
                            'Festival de Verão',
                            'Aquário de Ubatuba',
                            'Feirinha de Ubatuba',
                            'Cafe de La Musique',
                        ],
                        datasets: [{
                            label: 'Interessados no evento',
                            data: dadosEvento,
                            backgroundColor: [
                                '#020e4b',
                                '#083b14',
                                '#ffcc55ff',
                                '#5e6bacff'
                            ],
                            hoverOffset: 4
                        },]
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false
                    }
                });
            });
        } else {
            console.error("Erro ao buscar o evento no grafico.");
            exibirEventoNoGrafico(0);
        }
    }).catch(function (erro) {
        console.log(erro);
    });
}
