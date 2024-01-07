let campoA = document.querySelector("input#campoA")
let campoB = document.querySelector("input#campoB")
let btn = document.querySelector("#btn")
let msg = document.querySelector("#msg")
let form = document.querySelector("#formulario")

function remove(){
    msg.style.display="none"
}

form.addEventListener("submit",(evt)=>{
    evt.preventDefault()
    if(campoB.value > campoA.value){
        msg.innerHTML="Concluído! O Campo B é maior que o Campo A!"
        msg.style.display="block"
        msg.style.background="green"
        msg.style.color="white"
    } else{
        msg.innerHTML="Erro! O Campo B é menor que o Campo A!"
        msg.style.display="block"
        msg.style.background="red"
        msg.style.color="white"
    }
    campoA.value=""
    campoB.value=""
})
