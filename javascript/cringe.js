
    // var questao1 = document.quiz.questao1.value;
    // var questao2 = document.quiz.questao2.value;
    // var questao3 = document.quiz.questao3.value;
    // var pontos = parseInt(questao1)  + parseInt(questao2) + parseInt(questao3);

    function validaNome(){
        event.preventDefault();
        let campoNome = document.getElementById("nome");
        if (campoNome.value == ""){
            console.log(Teste)
            campoNome.focus()
        }
    }
    