var contenido = document.querySelector('#contenido');

function traer(){
    // "Creamos" la promesa "txt/texto.txt"
    fetch('txt/texto.txt')
    .then (respuesta => {
        // Con .text() traemos la promesa
        console.log(respuesta.text())
        contenido.innerHTML = `<p>${respuesta}</p>`
    })
}

// NOTA: Las arrows functions hacen el return de forma automática...