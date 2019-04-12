var arreglo = [1,2,3,4,5,"Ignacio",true];
console.log(arreglo);
//Llamar al indice "Ignacio" del arreglo
console.log(arreglo[5]);



//RECORRERLO CON FOR:
    //for(var i = 0; i < arreglo.length; i ++){
        //console.log(arreglo);
    for(var i = 0; i < 5; i++){   
        console.log(arreglo[i]);
    }
    console.log(arreglo);



//WHILE
var i = 1;
while(i <= 10){
    console.log(i);
    i++;
    //i = i +2; Sumar de dos en dos
}



//DO WHILE
var a = 0;

do{
    console.log(a);
    a++;
}while (a<10);



//SWITCH
var hora = 10; //Aquí se ingresa el número

switch(hora){
    case 10:
        console.log("Son las 10 de la mañana");
        break;
    case 15:
        console.log("Son las 15 de la tarde");
    default:
        console.log("No tengo saludo a esa hora");
        break;
}