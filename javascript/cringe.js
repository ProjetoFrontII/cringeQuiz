
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

})
*/
// ===============================================================================================
//                          VALIDAR RADIO
// =================================================================================

function validar_radio(){
    var radio = document. getElementsByName("questao1");
    for (i=0; i<radio.length;i++){
        if(radio[i].checked){
            console.log("radio q1 "+radio[i].value)
        } else{
            console.log("q1 vazio")
        }
    }
// }

// function validar_radio(){
    var radio = document. getElementsByName("questao2");
    for (i=0; i<radio.length;i++){
        if(radio[i].checked){
            console.log("radio q2"+radio[i].value)
        } else{
            console.log("q2 vazio")
        }
    }
// }


// function validar_radio(){
    var radio = document. getElementsByName("questao3");
    for (i=0; i<radio.length;i++){
        if(radio[i].checked){
            console.log("radio q3 "+radio[i].value)
        } else{
            console.log("q3 vazio")
        }
    }
// }


// function validar_radio(){
    var radio = document. getElementsByName("questao4");
    for (i=0; i<radio.length;i++){
        if(radio[i].checked){
            console.log("radio q4"+radio[i].value)
        } else{
            console.log("q4 vazio")
        }
    }
// }


// function validar_radio(){
    var radio = document. getElementsByName("questao5");
    for (i=0; i<radio.length;i++){
        if(radio[i].checked){
            console.log("radio q5 "+radio[i].value)
        } else{
            console.log("vazio q5")
        }
    }
// }

// function validar_radio(){
    var radio = document. getElementsByName("questao6");
    for (i=0; i<radio.length;i++){
        if(radio[i].checked){
            console.log("radio q6"+radio[i].value)
        } else{
            console.log("vazio q6")
        }
    }
// }


// function validar_radio(){
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
/*
    function validar_radio() {
    var alternativa_01 = document.querySelector("input[id^='alternativa_01']:checked");
    var alternativa_02 = document.querySelector("input[id^='alternativa_02']:checked");
    var alternativa_03 = document.querySelector("input[id^='alternativa_03']:checked");
    var alternativa_04 = document.querySelector("input[id^='alternativa_04']:checked");

    // var alternativa_01 = document.getElementById("input[id^='alternativa_01']:checked");
    // var alternativa_02 = document.getElementById("input[id^='alternativa_02']:checked");
    // var alternativa_03 = document.getElementById("input[id^='alternativa_03']:checked");
    // var alternativa_04 = document.getElementById("input[id^='alternativa_04']:checked");


    if (alternativa_01.checked == true) {
        // alert("1")
        console.log("Toma café");
        return true
    }else if (alternativa_02.checked == true) {
        // alert("2")
        console.log("assisti jornal");
        return true
    }
   else if (alternativa_03.checked == true) {
    // alert("3")
        console.log("olha cel");
        return true
    }
    else if (alternativa_04.checked == true) {
        // alert("4")
        console.log("vai pra aula");
        return true
    }
    // else if (     (alternativa_01.checked == false) 
    //             && (alternativa_02.checked == false)
    //             && (alternativa_03.checked == false)
    //             && (alternativa_04.checked == false)
    //             ){
    //     console.log("Campo não selecionado.");
    //     return false
        
    // }
}
*/