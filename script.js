const mensagemEnviado = document.getElementById("mensagemEnviado");
const nome = document.getElementById("nome");
const email = document.getElementById("email");
const telefone = document.getElementById("telefone");
const dataNascimento = document.getElementById("dataNascimento");
const senha = document.getElementById("senha");
const mensagem = document.getElementById("mensagem");


mensagemEnviado.addEventListener("click", function(event) {
    event.preventDefault(); // Impede o envio do formulário 
    alert("Mensagem enviada com sucesso! Entraremos em contato em breve.");
    nome.value = ""; // Limpa o campo de nome
    email.value = ""; // Limpa o campo de email
    telefone.value = ""; // Limpa o campo de telefone
    dataNascimento.value = ""; // Limpa o campo de data de nascimento
    senha.value = ""; // Limpa o campo de senha
    mensagem.value = ""; // Limpa o campo de mensagem
})