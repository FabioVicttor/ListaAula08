var nomes = [];

for (var cont = 0; cont < 4; cont++) {
    nomes.push(prompt("Informe o " + (cont + 1) + "º Nome."))
}

nomes.sort(function (a, b) {
    return (a > b) ? 1 : ((b > a) ? -1 : 0);
})

nomes.forEach((nomes) => {
    console.log(nomes)
})

var resultado = document.getElementById('resultado');
resultado.innerHTML = '<h3>' + nomes + '</h3>'