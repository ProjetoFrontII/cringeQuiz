
    // var questao1 = document.quiz.questao1.value;
    // var questao2 = document.quiz.questao2.value;
    // var questao3 = document.quiz.questao3.value;
    // var pontos = parseInt(questao1)  + parseInt(questao2) + parseInt(questao3);

    const form = document.querySelector("#form")
    const nomeInput = document.querySelector("#nome")
    const erroSpan = document.querySelector("#erro")

    form.addEventListener('submit', event=>{
        event.preventDefault()

        const guardaNome = nomeInput.value.trim()

        if(!guardaNome){
            erroSpan.innerHTML= '<span>Ops, esse campo é obrigatório!</span>'
        }

    })


