// ATRIBUIÇÃO DOS VALORES DE CADA QUESTÃO INICIALMENTE. SEM ALTERNATIVA CHECKED
var q1 = 0;
var q2 = 0;
var q3 = 0;
var q4 = 0;
var q5 = 0;
var q6 = 0;
var q7 = 0;

// DECLARAÇÃO GLOBAL DA STRING QUE SOMA O VALOR DE CADA QUESTÃO
var soma

// =================================================================================
//                          SOMA DA PONTUAÇÃO
// =================================================================================
function somar() {
    // CONTAGEM DOS PONTOS
    soma = parseInt(q1)
        + parseInt(q2)
        + parseInt(q3)
        + parseInt(q4)
        + parseInt(q5)
        + parseInt(q6)
        + parseInt(q7)
    console.log("O valor de todas as questões: " + soma)
}

// =================================================================================
//                          VALIDAR NOME
// =================================================================================
function validar_nome() {
    var nome = document.getElementById("nome").value;
    // RegEX QUE ACEITA APENAS LETRAS E UMA PALAVRA
    var padrao = /[^a-zà-ú]/gi;
    var valida_nome = nome.match(padrao);
    if (valida_nome || !nome) {
        console.log("Nome possui caracteres inválidos ou é vazio.");
        return false;
    } else {
        console.log("Nome Ok!");
        return true;
    }
}

// =================================================================================
//                          VALIDAR RADIO
// =================================================================================
<<<<<<< HEAD
var q1 = 0;
var q2 = 0;
var q3 = 0;
var q4 = 0;
var q5 = 0;
var q6 = 0;
var q7 = 0;
=======

>>>>>>> 32b40904de4b6bb1603b978e995981903a0568ff
// VERIFICAÇÃO DA QUESTÃO 1
function validar_radio1() {
    var radio = document.getElementsByName("questao1");
    for (i = 0; i < radio.length; i++) {
        if (radio[i].checked) {
            q1 = radio[i].value;
            console.log("radio q1 " + radio[i].value);
            return true;
        } else {
            // return false;
        }
    }
}
// VERIFICAÇÃO DA QUESTÃO 2
function validar_radio2() {
    var radio = document.getElementsByName("questao2");
    for (i = 0; i < radio.length; i++) {
        if (radio[i].checked) {
            q2 = radio[i].value;
            console.log("radio q2 " + radio[i].value);
            return true;
        } else {
            // return false;
        }
    }
}
// VERIFICAÇÃO DA QUESTÃO 3
function validar_radio3() {
    var radio = document.getElementsByName("questao3");
    for (i = 0; i < radio.length; i++) {
        if (radio[i].checked) {
            q3 = radio[i].value;
            console.log("radio q3 " + radio[i].value);
            return true;
        } else {
            // return false;
        }
    }
}
// VERIFICAÇÃO DA QUESTÃO 4
function validar_radio4() {
    var radio = document.getElementsByName("questao4");
    for (i = 0; i < radio.length; i++) {
        if (radio[i].checked) {
            q4 = radio[i].value;
            console.log("radio q4 " + radio[i].value);
            return true;
        } else {
            // return false;
        }
    }
}
// VERIFICAÇÃO DA QUESTÃO 5
function validar_radio5() {
    var radio = document.getElementsByName("questao5");
    for (i = 0; i < radio.length; i++) {
        if (radio[i].checked) {
            q5 = radio[i].value;
            console.log("radio q5 " + radio[i].value);
            return true;
        } else {
            // return false;
        }
    }
}
// VERIFICAÇÃO DA QUESTÃO 6
function validar_radio6() {
    var radio = document.getElementsByName("questao6");
    for (i = 0; i < radio.length; i++) {
        if (radio[i].checked) {
            q6 = radio[i].value;
            console.log("radio q6 " + radio[i].value);
            return true;
        } else {
            // return false;
        }
    }
}
// VERIFICAÇÃO DA QUESTÃO 7
function validar_radio7() {
    var radio = document.getElementsByName("questao7");
    var contagem7 = 0
    for (i = 0; i < radio.length; i++) {
        if (radio[i].checked) {q7 = radio[i].value;
            console.log("radio q7 " + radio[i].value);
            return true;
        } else {
            // return false;
        }
    }
}

// =================================================================================
//                     VERIFICAÇÃO DE TODOS OS CAMPOS
// =================================================================================
function valida_tudo() {
    if (
        (validar_nome() == true)
        && (validar_radio1() == true)
        && (validar_radio2() == true)
        && (validar_radio3() == true)
        && (validar_radio4() == true)
        && (validar_radio5() == true)
        && (validar_radio6() == true)
        && (validar_radio7() == true)
    ) {
<<<<<<< HEAD
        /*      // OPÇÃO CRIANDO O BOTÃO NO JS
                // Criação do "Botão enviar" quando todas as verificações forem 'true'
                var botaoEnviar = document.createElement("button");
                var botaoTextoEnviar = document.createTextNode("ENVIAR");
                botaoEnviar.setAttribute("type", "submit");
                botaoEnviar.appendChild(botaoTextoEnviar);
                form.appendChild(botaoEnviar);
                // Formatando o botão
                botaoEnviar.style.display = "flex";
                botaoEnviar.style.flexDirection = "column";
                botaoEnviar.style.border = "var(--cor-bg-verde-cringe)";
                botaoEnviar.style.color = "var(--cor-bg-laranja-escuro)";
                botaoEnviar.style.width = "12rem";
                botaoEnviar.style.height = "5rem";
                botaoEnviar.style.borderRadius = "1rem";
                botaoEnviar.style.textAlign = "center";
        */

        // CONTAGEM DOS PONTOS
        var soma = parseInt(q1)
            + parseInt(q2)
            + parseInt(q3)
            + parseInt(q4)
            + parseInt(q5)
            + parseInt(q6)
            + parseInt(q7)
        console.log("O valor de todas as questões: " + soma)
=======
        // OPÇÃO CRIANDO O BOTÃO NO JS
        // Criação do "Botão enviar" quando todas as verificações forem 'true'
        // var botaoEnviar = document.createElement("button");
        // var botaoTextoEnviar = document.createTextNode("ENVIAR");
        // botaoEnviar.setAttribute("type", "button");
        // botaoEnviar.appendChild(botaoTextoEnviar);
        // form.appendChild(botaoEnviar);

        // Formatando o botão
        // botaoEnviar.style.display = "flex";
        // botaoEnviar.style.flexDirection = "column";
        // botaoEnviar.style.border = "var(--cor-bg-verde-cringe)";
        // botaoEnviar.style.color = "var(--cor-bg-laranja-escuro)";
        // botaoEnviar.style.width = "12rem";
        // botaoEnviar.style.height = "5rem";
        // botaoEnviar.style.borderRadius = "1rem";
        // botaoEnviar.style.textAlign = "center";  
>>>>>>> 32b40904de4b6bb1603b978e995981903a0568ff

        // OUTRA OPÇÃO APENAS HABILITANDO O BOTÃO Q ESTÁ NO HTML
        document.getElementById("botaoEnviar").disabled = false;
        // CHAMA A FUNÇÃO QUE SOMA OS PONTOS DE CADA QUESTÃO
        return somar()
    } else {
        document.getElementById("botaoEnviar").disabled = true;
    }
<<<<<<< HEAD

}
=======
}

// =================================================================================
//                     CRIAÇÃO DO JSON
// =================================================================================
function submitJSON() {
    console.log("===================================")
    console.log("==  ==   REGISTRO JSON    ==  ==  ")
    console.log("===================================")

    // BUSCA AS INFOS DE DADOS
    let storage = JSON.parse(localStorage.getItem("dados"));

    // CONFERE SE O ARRAY ESTÁ VAZIO, SE SIM, ATRIBUI UM CONJUNTO VAZIO PARA 'DADOS'
    if (storage == null) {
        localStorage.setItem("dados", "[]")
        storage = [];
    }

    // ATRIBUI AO OBJETO OS VALORES DOS DADOS SUBMETIDOS PELO USUÁRIO
    let dadosForm = {
        nome: document.querySelector('#nome').value,
        pontos: soma,
    }

    // ARMAZENA AS INFORMAÇÕES DE 'DADOS' NO OBJETO
    storage.push(dadosForm);
    localStorage.setItem("dados", JSON.stringify(storage));

    // CHAMA A FUNÇÃO QUE RECUPERA OS DADOS PARA EXIBIR NO CONSOLE O RESULTADO
    return recuperaDados()
};

// =================================================================================
//                     RECUPERAÇÃO DO JSON
// =================================================================================
function recuperaDados() {
    let dadosRecuperados = JSON.parse(localStorage.getItem("dados"));
    for (let i = 0; i < dadosRecuperados.length; i++) {
        console.log(`Nome da pessoa ${i + 1}: ${dadosRecuperados[i].nome}`)
        console.log(`Pontos ${i + 1}: ${dadosRecuperados[i].pontos}`)
    }
};
>>>>>>> 32b40904de4b6bb1603b978e995981903a0568ff
