/* DOM --------------------------------------- */

var h1 = document.getElementById("titulo");
var p = document.getElementById("parrafo");

    console.log(h1.innerHTML);

        h1.innerHTML = "Texto 2"
        h1.style.color = "gray";
        h1.style.background = "#80808033";
        h1.style.padding = "10px";

        p.style.padding = "10px";


/* DOM --------------------------------------- */

var boton = document.getElementById("boton");

function cambiar(){
    p.style.color = "white";
    p.style.background = "#17a2b8";
}
boton.onclick = cambiar();
/*
boton.onclick = function(){
    p.style.color = "white";
    p.style.background = "#17a2b8";
}
*/
var parrafo = document.getElementsByClassName('lead');

    console.log(lead[1]);


var parrafo = document.querySelectorAll('p');
    console.log(parrafo);


/* EVENTOS --------------------------------------- */
var boton = document.getElementById("boton");
    
    boton.addEventListener('mouseover', function(){
        console.log("He detectado un ratón");
    });
    boton.addEventListener('click', function(){
        console.log('Me diste click');
    });
    boton.addEventListener('mouseout', function(){ 
        console.log("Adiós ratón");
    });
    