
const form = document.querySelector("#form")
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




