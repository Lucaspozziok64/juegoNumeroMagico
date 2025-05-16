let randomNumber;

const numeroRandom = () => {
    randomNumber = Math.floor(Math.random() * 10) + 1;
    alert('Numero aleatorio generado (1-10)...adivina cual es!!!');
    return randomNumber
}

const compararNumero = (e) => {
    e.preventDefault();

    let numeroIngresado = document.getElementById('inputNumero').value;
    numeroIngresado = parseInt(numeroIngresado, 10);
    console.log(numeroIngresado)

    if(isNaN(numeroIngresado)) {
        alert('Debe ingresar un numero')
    }else if(isNaN(randomNumber) || randomNumber === undefined) {
        alert('Debe comenzar el juego para adivinar')
    }else if(numeroIngresado > randomNumber) {
        alert('El numero que ingresaste es MAYOR al numero MAGICO')
    } else if (numeroIngresado < randomNumber) {
        alert('El numero ingresado es MENOR al numero MAGICO')
    }else {
        alert('¡¡¡ADIVINASTE!!!');
    }
}

const miFormulario = document.getElementById('juegoForm');
miFormulario.addEventListener('submit', compararNumero);

const botonComenzar = document.getElementById('botonComenzar')
botonComenzar.addEventListener('click', function() {
    this.disabled = true;
})




