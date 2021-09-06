
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
        document.form.nome.focus();
        return false;
    } else {
        console.log("Nome Ok!");
        return true;
    }
}




// =================================================================================
//                          VALIDAR RADIO
// =================================================================================
var resposta = {};
var q1 = document.getElementsByName('questao1'); 
var q2 = document.getElementsByName('questao2');
var q3 = document.getElementsByName('questao3');
var q4 = document.getElementsByName('questao4');
var q5 = document.getElementsByName('questao5');
var q6 = document.getElementsByName('questao6');
var q7 = document.getElementsByName('questao7');

function validar_radio1(){

    var radio = document. getElementsByName("questao1");
    for (i=0; i<radio.length;i++){
        if(radio[i].checked){

            console.log("radio q1 "+radio[i].value)
        } else{
            console.log("q1 vazio")
        }
    }
}

function validar_radio2(){
    var radio = document. getElementsByName("questao2");
    for (i=0; i<radio.length;i++){
        if(radio[i].checked){
            console.log("radio q2"+radio[i].value)
        } else{
            console.log("q2 vazio")
        }
    }
}


function validar_radio3(){
    var radio = document. getElementsByName("questao3");
    for (i=0; i<radio.length;i++){
        if(radio[i].checked){
            console.log("radio q3 "+radio[i].value)
        } else{
            console.log("q3 vazio")
        }
    }
}


function validar_radio4(){
    var radio = document. getElementsByName("questao4");
    for (i=0; i<radio.length;i++){
        if(radio[i].checked){
            console.log("radio q4"+radio[i].value)
        } else{
            console.log("q4 vazio")
        }
    }
}


function validar_radio5(){
    var radio = document. getElementsByName("questao5");
    for (i=0; i<radio.length;i++){
        if(radio[i].checked){
            console.log("radio q5 "+radio[i].value)
        } else{
            console.log("vazio q5")
        }
    }
}

function validar_radio6(){
    var radio = document. getElementsByName("questao6");
    for (i=0; i<radio.length;i++){
        if(radio[i].checked){
            console.log("radio q6"+radio[i].value)
        } else{
            console.log("vazio q6")
        }
    }
}


function validar_radio7(){
    var radio = document. getElementsByName("questao7");
    var contagem7 = 0
    for (i=0; i<radio.length;i++){
        if(radio[i].checked){

            console.log("radio q7"+radio[i].value)
        } else{
            console.log("vazio q7")
        }
    }

    


}



function resposta(q_num, event){
    if(event.target.type === 'radio'){
        console.log(event.target.value);
        resposta['questão '+q_num]=parseInt(event.target.value);
        console.log(resposta)
    }
}

/*

q2.addEventListener('click',function(event){
    resposta(2,event)
})

q3.addEventListener('click',function(event){
    resposta(3,event)
})

q4.addEventListener('click',function(event){
    resposta(4,event)
})

q5.addEventListener('click',function(event){
    resposta(5,event)
})

q6.addEventListener('click',function(event){
    resposta(6,event)
})

q7.addEventListener('click',function(event){
    resposta(7,event)
})

function total(){
    var questao_total =
    resposta.q1+
    resposta.q2+
    resposta.q3+
    resposta.q4+
    resposta.q5+
    resposta.q6+
    resposta.q7;

    return questao_total;
}*/