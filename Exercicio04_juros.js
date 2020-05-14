function juros(valor, atraso) {
    if (atraso < 4) {
        alert("Valor : " + valor + " || Juros: 0%" + " || Valor Final: " + valor);
    } else if (atraso > 3 && atraso < 16) {
        alert("Valor : " + valor + " || Juros: 10%" + " || Valor Final: " + (valor * 1.1));
    } else {
        alert("Valor : " + valor + " || Juros: 15%" + " || Valor Final: " + valor * 1.15);
    }
}
