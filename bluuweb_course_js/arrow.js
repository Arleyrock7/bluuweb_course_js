/* FUNCTION --------------------------------------- */
/*
var saludoId = document.getElementById('saludo');

function saludar(nombre){
    return "Hola" + nombre;
}

    saludoId.innerHTML = saludar(' Test');  
*/


/* ARROW FUNCTION --------------------------------------- */
var saludoId = document.getElementById('saludo');

    var saludar = nombre => "Hola" + nombre;
        saludoId.innerHTML = saludar(' Test');



/* innerHTML--------------------------------------- */

var sumaId = document.getElementById('suma');

//var sumar = (num1, num2) => num1 + num2;
var sumar = (num1, num2) => {
    var num3 = 15;
    return num1 + num2 + num3;
}

// += No reemplaza el texto "El resultado es:" en la eqtiqueta con id="suma", lo concatena...
    sumaId.innerHTML+= sumar (10 , 20);


