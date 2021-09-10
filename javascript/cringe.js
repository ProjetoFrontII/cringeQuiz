
/*const form = document.querySelector("#form")
const nomeInput = document.querySelector("#nome")
const erroSpan = document.querySelector("#erro")



form.addEventListener('submit', event => {
    event.preventDefault()

    const guardaNome = nomeInput.value.trim()

    if (!guardaNome) {
        erroSpan.innerHTML = '<span>Ops, esse campo é obrigatório!</span>'
    }else{
        console.log("testanto input "+ guardaNome)
    }

})*/
// =================================================================================
//                          VALIDAR NOME
// =================================================================================
function validar_nome() {
    var nome = document.getElementById("nome").value;
    // RegEX que acceita espaço entre palavras
    var padrao = /[^a-zà-ú]/gi;
    var valida_nome = nome.match(padrao);
    if (valida_nome || !nome) {
        console.log("Nome possui caracteres inválidos ou é vazio.");
        // document.form.nome.focus();
        return false;
    } else {
        console.log("Nome Ok!");
        return true;
    }
}

// =================================================================================
//                          VALIDAR RADIO
// =================================================================================
var q1 = 0;
var q2 = 0;
var q3 = 0;
var q4 = 0;
var q5 = 0;
var q6 = 0;
var q7 = 0;
// VERIFICAÇÃO DA QUESTÃO 1
function validar_radio1() {
    var radio = document.getElementsByName("questao1");
    for (i = 0; i < radio.length; i++) {
        if (radio[i].checked) {
            console.log("radio q1 " + radio[i].value);
            q1 = radio[i].value;
            console.log(q1)
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
            console.log("radio q2 " + radio[i].value);
            q2 = radio[i].value;
            console.log(q2)
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
            console.log("radio q3 " + radio[i].value);
            q3 = radio[i].value;
            console.log(q3)
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
            console.log("radio q4 " + radio[i].value);
            q4 = radio[i].value;
            console.log(q4)
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
            console.log("radio q5 " + radio[i].value);
            q5 = radio[i].value;
            console.log(q5)
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
            console.log("radio q6 " + radio[i].value);
            q6 = radio[i].value;
            console.log(q6)
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
        if (radio[i].checked) {
            console.log("radio q7 " + radio[i].value);
            q7 = radio[i].value;
            console.log(q7)
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

        // OUTRA OPÇÃO APENAS HABILITANDO O BOTÃO Q ESTÁ NO HTML
        document.getElementById("botaoEnviar").disabled = false;
        
    } else {
        document.getElementById("botaoEnviar").disabled = true;

    }

}