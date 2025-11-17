var nomeCorreto = false;

function validacaoNome() {
    var identificadorNumero0 = (nome_input.value).indexOf("0");
    var identificadorNumero1 = (nome_input.value).indexOf("1");
    var identificadorNumero2 = (nome_input.value).indexOf("2");
    var identificadorNumero3 = (nome_input.value).indexOf("3");
    var identificadorNumero4 = (nome_input.value).indexOf("4");
    var identificadorNumero5 = (nome_input.value).indexOf("5");
    var identificadorNumero6 = (nome_input.value).indexOf("6");
    var identificadorNumero7 = (nome_input.value).indexOf("7");
    var identificadorNumero8 = (nome_input.value).indexOf("8");
    var identificadorNumero9 = (nome_input.value).indexOf("9");

    if (identificadorNumero0 > -1 || identificadorNumero1 > -1 || identificadorNumero2 > -1 || identificadorNumero3 > -1 || identificadorNumero4 > -1 || identificadorNumero5 > -1 || identificadorNumero6 > -1 || identificadorNumero7 > -1 || identificadorNumero8 > -1 || identificadorNumero9 > -1 || (nome_input.value).length < 3 || nome_input.value == "") {
        nome_mensagem.innerHTML = `<span style="color: red; font-size: 12px; font-weight: 400;">O nome deve conter apenas letras e no mínimo 3 caracteres</span>`;
        nome_mensagem.innerHTML += `<style>#nome_input {margin-bottom: 0px;}<style>`;
        nomeCorreto = false;
    } else {
        nome_mensagem.innerHTML = ``;
        nomeCorreto = true;
    }

    contador = 0;
}

var idadeCorreta = false;

function validacaoIdade() {
    if (idade_input.value != Number(idade_input.value)) {
        idade_mensagem.innerHTML = `<span style="color: red; font-size: 12px; font-weight: 400;">A idade deve conter apenas numeros</span>`;
        idade_mensagem.innerHTML += `<style>#idade_input {margin-bottom: 0px;}<style>`;
        idadeCorreta = false;
    } else if (idade_input.value <= 0 || idade_input.value > 125) {
        idade_mensagem.innerHTML = `<span style="color: red; font-size: 12px; font-weight: 400;">Idade inválida</span>`;
        idade_mensagem.innerHTML += `<style>#idade_input {margin-bottom: 0px;}<style>`;
        idadeCorreta = false;
    } else {
        idade_mensagem.innerHTML = ``;
        idadeCorreta = true;
    }
}

var emailCorreto = false;

function validacaoEmail() {
    if ((email_input.value).indexOf('@') == -1 || (email_input.value).length <= 8) {
        email_mensagem.innerHTML = `<span style="color: red; font-size: 12px; font-weight: 400;">E-mail inválido</span>`;
        email_mensagem.innerHTML += `<style>#email_input {margin-bottom: 0px;}<style>`
        emailCorreto = false;
    } else {
        email_mensagem.innerHTML = ``;
        emailCorreto = true;
    }
}

var senhaCorreta = false;

function validacaoSenha() {
    if ((senha_input.value).length < 8) {
        tooltip_quantidade_caracter.innerHTML = `<span style="color: red;">Mínimo de oito caracteres. (1-8...)<br></span>`
    } else {
        tooltip_quantidade_caracter.innerHTML = `<span>Mínimo de oito caracteres. (1-8...)<br></span>`
    }

    var verificar_numero = 0;

    for (var contador_numero = 0; contador_numero < (senha_input.value).length; contador_numero++) {
        if ((senha_input.value)[contador_numero] >= '0' && (senha_input.value[contador_numero]) <= '9') {
            verificar_numero++;
        }
    }

    if (verificar_numero < 2) {
        tooltip_quantidade_numero.innerHTML = `<span style="color: red;">Mínimo de dois números. (1-2...)<br>`
    } else {
        tooltip_quantidade_numero.innerHTML = `<span>Mínimo de dois números. (1-2...)<br>`
    }

    var caracter = ['!', '@', '#', '$', '%', '¨', '&', '*', '(', ')'];

    for (var contador_vetor = 0; contador_vetor < caracter.length; contador_vetor++) {
        if ((senha_input.value).indexOf(caracter[contador_vetor]) != -1) {
            break;
        }
    }

    if (contador_vetor == caracter.length) {
        tooltip_caracter_especial.innerHTML = `<span style="color: red;">Mínimo de um caracter especial. (#...)<br>`;
    } else {
        tooltip_caracter_especial.innerHTML = `<span>Mínimo de um caracter especial. (#...)<br>`;
    }

    for (var contador_maiusculo = 0; contador_maiusculo < (senha_input.value).length; contador_maiusculo++) {
        if ((senha_input.value)[contador_maiusculo] >= 'A' && (senha_input.value)[contador_maiusculo] <= 'Z') {
            break;
        }
    }

    if (contador_maiusculo == (senha_input.value).length) {
        tooltip_letra_maiuscula.innerHTML = `<span style="color: red;">Mínimo de uma letra maiúscula. (A...)<br></span>`;
    } else {
        tooltip_letra_maiuscula.innerHTML = `<span>Mínimo de uma letra maiúscula. (A...)<br></span>`;
    }

    for (var contador_minusculo = 0; contador_minusculo < (senha_input.value).length; contador_minusculo++) {
        if ((senha_input.value)[contador_minusculo] >= 'a' && (senha_input.value)[contador_minusculo] <= 'z') {
            break;
        }
    }

    if (contador_minusculo == (senha_input.value).length) {
        tooltip_letra_minuscula.innerHTML = `<span style="color: red;">Mínimo de uma letra minúscula. (a...)</span>`;
    } else {
        tooltip_letra_minuscula.innerHTML = `<span>Mínimo de uma letra minúscula. (a...)</span>`;
    }

    if (((senha_input.value).length < 8) || (verificar_numero < 2) || (contador_vetor == caracter.length) || (contador_maiusculo == (senha_input.value).length) || (contador_minusculo == (senha_input.value).length)) {
        senha_mensagem.innerHTML = `<span style="color: red; font-size: 12px; font-weight: 400;">Senha inválida</span`;
        senha_mensagem.innerHTML += `<style>#senha_input {margin-bottom: 0px;}<style>`;
        senhaCorreta = false;
    } else {
        senha_mensagem.innerHTML = ``;
        senhaCorreta = true;
    }

    verificar_numero = 0;
    contador_vetor = 0;
    contador_maiusculo = 0;
    contador_minusculo = 0;
}

var confirmarCorreto = false;

function validacaoConfirmar() {
    if (confirmacao_senha_input.value != senha_input.value) {
        confirmar_mensagem.innerHTML = `<span style="color: red; font-size: 12px; font-weight: 400;">A senha digitada está incorreta</span>`;
        confirmar_mensagem.innerHTML += `<style>#confirmacao_senha_input {margin-bottom: 0px;}<style>`;
        confirmarCorreto = false;
    } else {
        confirmar_mensagem.innerHTML = ``;
        confirmarCorreto = true
    }
}

function cadastrar() {
    var nomeVar = nome_input.value;
    var idadeVar = idade_input.value;
    var emailVar = email_input.value;
    var senhaVar = senha_input.value

    // Validando o cadastro
    if (nomeCorreto == false || idadeCorreta == false || emailCorreto == false || senhaCorreta == false || confirmarCorreto == false) {
        alert("Preencha os campos corretamente.")
    } else {
        fetch("/usuarios/cadastrar", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                nomeServer: nomeVar,
                idadeServer: idadeVar,
                emailServer: emailVar,
                senhaServer: senhaVar
            }),
        })
            .then(function (resposta) {
                console.log("resposta: ", resposta);

                if (resposta.ok) {
                    var card_mensagem = document.getElementById("card_erro");
                    var mensagem = document.getElementById("mensagem")
                    
                    card_mensagem.style.display = "flex";

                    mensagem.innerHTML = "Cadastro realizado com sucesso!<br> Redirecionando para tela de Login...";

                    setTimeout(() => {
                        window.location = "../login.html";
                    }, "2000");

                } else {
                    throw "Houve um erro ao tentar realizar o cadastro!";
                }
            })
            .catch(function (resposta) {
                console.log(`#ERRO: ${resposta}`);
            });

        return false;
    }
}