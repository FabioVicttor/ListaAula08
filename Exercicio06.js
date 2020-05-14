var a;
var b;
var c;
var delta;
var x1;
var x2;

a = parseFloat(prompt("Informe o valor de A"));
b = parseFloat(prompt("Informe o valor de B"));
c = parseFloat(prompt("Informe o valor de C"));

delta = b ** 2 - 4 * a * c;

x1 = (-b + delta ** 0.5) / (2 * a);
x2 = (-b - delta ** 0.5) / (2 * a);

alert("Valor de x1: " + x1 + " || Valor de x2: " + x2);

