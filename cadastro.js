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
  
  })
})
