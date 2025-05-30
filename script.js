// script.js - Comportamento básico para envio de formulário

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const mensagem = document.getElementById("mensagem").value;

    if (nome && email && mensagem) {
      alert("Mensagem enviada com sucesso!");
      form.reset();
    } else {
      alert("Por favor, preencha todos os campos.");
    }
  });
});
