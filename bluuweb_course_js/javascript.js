alert("Test javascript alert!");

//Variables

var numero = 5;
var cadena = "cadena de caracter";

var numeroDos = 10;

alert(numero);
alert(cadena);
alert(numero + numeroDos);

//Sobreescribir
numeroDos = 6;
alert(numeroDos);


var numeroTres = 10;
//numeroTres = numeroTres + 1;
numeroTres ++;
console.log(numeroTres);



//Condicionales:
var numeroCondicion = 10;
var nombre = "Ignacio";

if(numeroCondicion > 5 && nombre == "Ignacio"){ // ||
    console.log("Verdadero");
}else{
    console.log("Falso");
}

var verdadero = false;

if(verdadero==false){
    console.log("Verdadero!");
}else{
    console.log("Falso!");
}