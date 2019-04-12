//VAR & LET

var i = "Cincuenta";

    for(let i = 0; i <= 10; i++){
        console.log(`Scope For es de: ${i}` );
    }

console.log(`El valor de "i" en el SCOPE GLOBAL (Ambiente) es de valor: ${i}`);



//CONST
//NOTA: A las constantes se le deben asignar valor una ves declarada, de lo contrario muestra error 
//      Tampoco se pueden reasignar valores a las constantes

const numero = 44;
//numero = 44;
    console.log(numero);


    const numeros = [55,60,30,];

        numeros.push(10);
            console.log(numeros);