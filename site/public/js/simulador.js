function simular() {
    var distancia = Number(ipt_distancia.value);
    var consumo = Number(ipt_consumo.value);

    if (distancia == "") {
        alert("O campo de distância precisa ser preenchido.");
    } else if (ipt_distancia.value != distancia) {
        alert("O campo de distância pode conter apenas números.");
    } else if (distancia < 0) {
        alert("Insira uma distância válida.");
    } else if (distancia > 5000) {
        alert("Para viagens acima de 5000 km é recomendado uma passagem de avião.");
    } else if (consumo == "") {
        alert("O campo de consumo médio precisa ser preenchido.");
    } else if (ipt_consumo.value != consumo) {
        alert("O campo de consumo médio pode conter apenas números.");
    } else if (consumo < 0) {
        alert("Insira um consumo válido.");
    } else if (consumo > 30) {
        alert("Insira um consumo válido.");
    } else {
        var litros = distancia / consumo;
        var preco = litros * 6.16;
        var tempo = distancia / 75;
        var tempo_inteiro = Math.floor(tempo);

        console.log(tempo_inteiro);

        if ((tempo - tempo_inteiro) >= 0.6) {
            tempo += 1;

        }
        console.log(tempo);

        card_simulador.innerHTML =
            `<h1>Resultado</h1>
            <div class="linha_resultado">
                <p>Distância total da viagem: ${distancia} Km</p>
            </div>
            <div class="linha_resultado">
                <p>Duração aproximada da viagem: ${Math.floor(tempo)} Horas</p>
            </div>
            <div id="ultima_linha" class="linha_resultado">
                <p>Gasto total com gasolina: ${preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
                <button onclick="simular_novamente()">Simular novamente</button>
            </div>
            <div class="paragrafo_responda_questionario">
                <p>
                    Responda também nosso questionário logo abaixo,
                    para nos ajudar a lhe fornecer a melhor expêriencia
                    possivel! 
                </p>
            </div>`
    }
}

function simular_novamente() {
    card_simulador.innerHTML =
        `<h1>Simulador</h1>
        <p class="paragrafo_distancia">
            Insira a distância em quilômetros de sua casa até Ubatuba:
            <br>
            (Link para coletar a distância:
            <a href="https://www.google.com/maps/dir//Ubatuba,+SP/@-23.3143278,-47.1817137,8z/data=!4m8!4m7!1m0!1m5!1m1!1s0x94cd5228bab1966d:0x9905169ef1825576!2m2!1d-45.0849154!2d-23.4345298?entry=ttu&g_ep=EgoyMDI1MTExNi4wIKXMDSoASAFQAw%3D%3D" style="color: cornflowerblue;">
                Link para o Google Maps
            </a>)
        </p>
        <br>
        <input id="ipt_distancia" placeholder="Distância em quilômetros (km)"><br>
        <p>
            Insira o consumo médio de gasolina do seu veículo (Em km/l):
            <br>
            (Caso não saiba seu consumo, simule com 12 km/l)
        </p>
        <br>
        <input id="ipt_consumo" placeholder="Consumo médio em (km/l)"><br>

        <button onclick="simular()">Simular</button>`
}

var contador_questionario = false;

function cadastrar() {
    var praia = select_praia.value;
    var segunda_praia = select_segunda_praia.value;
    var terceira_praia = select_terceira_praia.value;
    var evento = select_evento.value;
    var hobbie = select_hobbie.value;
    var usuarioId = localStorage.ID_USUARIO;

    if (contador_questionario == true) {
        alert("O questionário pode ser realizado apenas uma vez.")
    } else {
        if (praia == "#") {
            alert("Selecione uma das praias.");
        } else if (segunda_praia == "#") {
            alert("Selecione uma das praias.")
        } else if (terceira_praia == "#") {
            alert("Selecione uma das praias.")
        } else if (evento == "#") {
            alert("Selecione um dos eventos.");
        } else if (hobbie == "#"){
            alert("Selecione um dos hobbies.");
        } else {
            if (praia == "estaleiro") {
                praia = 1;
            } else if (praia == "maranduba") {
                praia = 2;
            } else if (praia == "fortaleza") {
                praia = 3;
            } else if (praia == "felix") {
                praia = 4;
            } else if (praia == "pereque") {
                praia = 5;
            } if (segunda_praia == "estaleiro") {
                segunda_praia = 1;
            } else if (segunda_praia == "maranduba") {
                segunda_praia = 2;
            } else if (segunda_praia == "fortaleza") {
                segunda_praia = 3;
            } else if (segunda_praia == "felix") {
                segunda_praia = 4;
            } else if (segunda_praia == "pereque") {
                segunda_praia = 5;
            } if (terceira_praia == "estaleiro") {
                terceira_praia = 1;
            } else if (terceira_praia == "maranduba") {
                terceira_praia = 2;
            } else if (terceira_praia == "fortaleza") {
                terceira_praia = 3;
            } else if (terceira_praia == "felix") {
                terceira_praia = 4;
            } else if (terceira_praia == "pereque") {
                terceira_praia = 5;
            } if (evento == "festival") {
                evento = 1;
            } else if (evento == "aquario") {
                evento = 2;
            } else if (evento == "passeio") {
                evento = 3;
            } else if (evento == "balada") {
                evento = 4;
            } if (hobbie == "caminhada") {
                hobbie = 1;
            } else if (hobbie == "sorvete") {
                hobbie = 2;
            } else if (hobbie == "passeio") {
                hobbie = 3;
            } else if (hobbie == "futevolei") {
                hobbie = 4;
            } 
            
            console.log(`console simulador ${praia}, ${segunda_praia}, ${terceira_praia}, ${evento}, ${hobbie}, ${usuarioId}`);

            alert("Sua resposta foi registrada. Obrigado pela participação!")
            contador_questionario = true;

            fetch("/questionario/cadastrar", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    praiaServer: praia,
                    segundaPraiaServer: segunda_praia,
                    terceiraPraiaServer: terceira_praia,
                    eventoServer: evento,
                    hobbieServer: hobbie,
                    idServer: usuarioId
                }),
                
            })
                
            return false;
        }
    }
} 