// EJEMPLO --------------------------------------------------
/*
var contenido = document.querySelector('#contenido');

function traer(){
    //Template literals ``
    contenido.innerHTML = `<p>Example</p>`;
}
*/




// FETCH API --------------------------------------------------
var contenido = document.querySelector('#contenido')

    function traer(){
        fetch('txt/texto.txt')
            // Promesas then
            .then(data => data.text())
            .then(data => {
                console.log(data);
                contenido.innerHTML = `<p>${data}</p>`;
            })
    }
