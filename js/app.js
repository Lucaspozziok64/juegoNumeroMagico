let randomNumber;

const numeroRandom = () => {
    randomNumber = Math.floor(Math.random() * 10) + 1;
    alert('Numero generado(1-10)...adivina cual es!!!');
    return randomNumber
}

const compararNumero = () => {
    const numeroIngresado = document.getElementById('inputNumero');
    const inputValue = numeroIngresado.value;
    const numeroParseado = parseInt(inputValue, 10);

    if(numeroParseado > randomNumber) {
        alert('El numero que ingresaste es MAYOR al numero MAGICO')
    } else if (numeroParseado < randomNumber) {
        alert('El numero ingresado es MENOR al numero MAGICO')
    } else {
        alert('¡¡¡ADIVINASTE!!!');
    }
}

const botonComenzar = document.getElementById('botonComenzar')
botonComenzar.addEventListener('click', function() {
    this.disabled = true;
})




