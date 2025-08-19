let button = document.querySelector('.Boton');
let titulo = document.querySelector('h1');

button.addEventListener('click', () => {
    let colorElegido = prompt('Elegí un color para el fondo del título.\nEj: "red", "green", "lightblue", etc.');

    if (colorElegido) {
        titulo.style.backgroundColor = colorElegido;
        titulo.style.color = 'white';
    } else {
        alert('No se ingresó ningún color.');
    }
});