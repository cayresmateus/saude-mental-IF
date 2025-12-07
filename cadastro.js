const ideia = document.getElementById("ideia");
const inserir = document.getElementById("inserir");
const remover = document.getElementById("remover");
const lista = document.querySelector(".ideias-lista");
const ideias = [];

inserir.addEventListener("click", () => {
  ideias.push(ideia.value)
  
  lista.innerHTML = "";
  ideias.forEach(e => {
  lista.innerHTML += `<li> ${e} </li>`
  ideia.value = "";
  })
})

remover.addEventListener("click", () => {
  ideias.pop();
  lista.innerHTML = "";
  ideias.forEach(e => {
  lista.innerHTML += `<li> ${e} </li>`
  
  })

})

function validarFormulario(){
  let inputNome = document.getElementById("nome")
  let inputEmail = document.getElementById("email")
  let inputContato = document.getElementById("contato")
  let inputMensagem = document.getElementById("mensagem")

  let nomeErro = document.getElementById("nome-error")
  let emailErro = document.getElementById("email-error")
  let contatoErro = document.getElementById("contato-error")
  let mensagemErro = document.getElementById("mensagem-error")

  let validado = true

  if(inputNome.value.trim() === ""){
    nomeErro.textContent = "O nome é obrigatório"
    inputNome.style.border = "red solid 3px"
    validado = false
  }else{
    nomeErro.textContent = ""
    inputNome.style.border = "green solid 3px"
    
  }

  if(inputEmail.value.trim() === ""){
    emailErro.textContent = "O e-mail é obrigatório"
    inputEmail.style.border = "red solid 3px"
    validado = false
  }else if (inputEmail.value.indexOf("@") === -1 || inputEmail.value.indexOf(".") === -1){
    emailErro.textContent = "Insira um e-mail válido"
    inputEmail.style.border = "red solid 3px"
    validado = false
  }else{
    emailErro.textContent = ""
    inputEmail.style.border = "green solid 3px  "
    
  }
  const regex = /^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/;
  if(inputContato.value.trim() === ""){
    contatoErro.textContent = "O numero de telefone é obrigatório"
    inputContato.style.border = "red solid 3px"
    validado = false
  }else if(!regex.test(inputContato.value)){
    contatoErro.textContent = "Insira um número válido"
    inputContato.style.border = "red solid 3px"
    validado = false
  }
  else{
    contatoErro.textContent = ""
    inputContato.style.border = "green solid 3px"
  }

  if(inputMensagem.value.trim() === ""){
    mensagemErro.textContent = "Digite uma mensagem"
    inputMensagem.style.border = "red solid 3px"
    validado = false
  }else{
    mensagemErro.textContent = ""
    inputMensagem.style.border = "green solid 3px"
  }

  if(!validado){
    return false
  }

alert("mensagem enviada com sucesso")
return true;
}





