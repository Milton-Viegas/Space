// Código JavaScript para adicionar funcionalidades ao site

// Adiciona uma classe "ativo" ao item de menu selecionado
const itensMenu = document.querySelectorAll("nav ul li a");

itensMenu.forEach(item => {
  item.addEventListener("click", () => {
    itensMenu.forEach(item => item.classList.remove("ativo"));
    item.classList.add("ativo");
  });
});

// Verifica se o formulário de contato foi preenchido corretamente
const form = document.querySelector("form");
const nomeInput = document.querySelector("#nome");
const emailInput = document.querySelector("#email");
const mensagemInput = document.querySelector("#mensagem");

form.addEventListener("submit", e => {
  if (nomeInput.value === "" || emailInput.value === "" || mensagemInput.value === "") {
    alert("Preencha todos os campos!");
    e.preventDefault();
  }
});
