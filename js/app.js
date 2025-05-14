let randomNumber;

const numeroRandom = () => {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    console.log(randomNumber);
    return randomNumber
}

const compararNumero = () => {
    const numeroIngresado = document.getElementById('inputNumero');
    const inputValue = numeroIngresado.value;
    const numeroParseado = parseInt(inputValue, 10);
    console.log(numeroParseado);

    if(numeroParseado > randomNumber) {
        alert('El numero que ingresaste es MAYOR al numero MAGICO')
    } else if (numeroParseado < randomNumber) {
        alert('El numero ingresado es MENOR al numero MAGICO')
    } else {
        alert('¡¡¡ADIVINASTE!!!');
    }
}




