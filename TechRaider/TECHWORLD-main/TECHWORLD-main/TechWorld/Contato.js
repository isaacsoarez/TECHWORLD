document.addEventListener("DOMContentLoaded", function () {
    const formularioContato = document.getElementById("formulario-contato");

    formularioContato.addEventListener("submit", function (event) {
        event.preventDefault();
        const nome = document.getElementById("nome").value;
        const email = document.getElementById("email").value;
        const mensagem = document.getElementById("mensagem").value;

        console.log("Nome: " + nome);
        console.log("Email: " + email);
        console.log("Mensagem: " + mensagem);

        formularioContato.reset();
    });
});
