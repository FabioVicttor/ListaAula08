var vetor = [];
var media;
var soma = 0;


for (var cont = 0; cont < 10; cont++) {
    var valor = parseFloat(prompt("Informe o " + (cont + 1) + "º numero: "));
    vetor.push(valor);
}

vetor.sort((a, b) => a - b)

for (cont = 0; cont < vetor.length; cont++) {
    soma = vetor[cont] + soma
}
media = soma / vetor.length;

console.log("Maior número: " + vetor[vetor.length - 1] +" || Menor número: " + vetor[0]+ " || Média: " + media);

var desc;

for (var cont = vetor.length - 1; cont >= 0; cont--) {

    desc = vetor[cont] + " || " + desc

}
alert(desc);
