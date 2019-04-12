// ARREGLOS ------------------------------------------
var arreglo = ['HTML', 15, true];

    console.log(arreglo);
    console.log(arreglo[2]);




// OBJETOS ------------------------------------------
var objeto = {
    nombre: 'HTML5 y CSS3',
    duracion: 15,
    estado: true,
    capitulos: {
        nombre: 'Introducción',
        videos: 20
    }
}
    console.log(objeto);
        // para acceder a los valores se hace d ela siguiente forma:
        console.log(objeto['nombre']);
        // Otra forma:
        console.log(objeto.nombre);

        // Para acceder al objeto dentro de un objeto
        console.log(objeto.capitulos);
        console.log(objeto.capitulos.nombre);


// ARRAYS DE OBJETOS ------------------------------------------

var arrayObjetos = [
    {
        nombre: 'HTML5 Y CSS3',
        estado: true
    },
    {
        nombre: 'Javascript ECS6',
        estado: true
    },
    {
        nombre: 'NodeJS',
        estado: true
    },
    {
        nombre: 'mongoDB',
        estado: false
    }
]

console.log(arrayObjetos);

    // Acceder al indice y objeto requerido
    console.log(arrayObjetos[2])
    console.log(arrayObjetos[2].nombre);





// RECORRER ARRAYS DE OBJETOS ------------------------------------------

for(let indice of arrayObjetos){
    console.log(indice);
    console.log(indice.nombre);
}
