function entrar() {
    var emailVar = email_input.value;
    var senhaVar = senha_input.value;
    

    if (emailVar == "" || senhaVar == "") {
        alert("Preencha todos os campos.");
        return false;
    }

    console.log("FORM LOGIN: ", emailVar);
    console.log("FORM SENHA: ", senhaVar);

    fetch("/usuarios/autenticar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            emailServer: emailVar,
            senhaServer: senhaVar
        })
    }).then(function (resposta) {
        console.log("ESTOU NO THEN DO entrar()!")

        if (resposta.ok) {
            console.log(resposta);

            resposta.json().then(json => {
                console.log(json);
                console.log(JSON.stringify(json));
                sessionStorage.EMAIL_USUARIO = json[0].email;
                sessionStorage.ID_USUARIO = json[0].id;
                localStorage.IDADE_USUARIO = json[0].idade;
                localStorage.NOME_USUARIO = json[0].nome;
                
                setTimeout(function () {
                    if (emailVar == 'leo@gmail.com'){
                        window.location = "./dashboard/dashboard_copy.html";
                    } else {
                        window.location = "../home.html";
                    }
                }, 1000); // apenas para exibir o loading

            });

        } else {

            console.log("Houve um erro ao tentar realizar o login!");

            resposta.text().then(texto => {
                console.error(texto);
            });
        }

    }).catch(function (erro) {
        console.log(erro);
    })

    return false;
}