function login() {
    var usuario;
    var senha;

    var arrey = [
        { usuario: "JOAO", senha: "123456" },
        { usuario: "PAULO", senha: "A1B2C3" },
        { usuario: "MARIA", senha: "676767" }
    ];

    // usuario = prompt("Informe o Usuário:");
    // senha = prompt("Infome a senha:");

    var usuario = document.getElementById("usuario").value;
    var senha = document.getElementById("senha").value;


    arrey = arrey.filter((arrey) => {
        if (arrey.usuario == usuario && arrey.senha == senha) {
            return arrey
        }
    })

    var resultado = document.getElementById('resultado');
    if (arrey.length == 1) {
        alert("Usuário e senha validado. Bem vindo a aplicação");
        resultado.innerHTML = '<h2>' + usuario + ', Bem vindo a aplicação</h2>'
    } else {
        alert("Usuário e senha Inválidos");
        resultado.innerHTML = '<h2>Usuário e senha Inválidos</h2>'
    }

}