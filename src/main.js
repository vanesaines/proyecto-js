/* Act practica nota de proyecto  -----------------------------------------

let notaDeMiProyectoFinal = 10;
let penalidadPorEntrega = 4;
let resultadoProyectoFinal = notaDeMiProyectoFinal - penalidadPorEntrega;

const textoParaElAlumno = 'La nota de tu proyecto final es: '

segundas variables + prompt
const nombreSitio = prompt ('Decime el nombre del sitio');

Act practica jugar al voley -----------------------------------------

const edad = 14;
const altura = 80;

if ((edad >=18) || (altura >=170)) {
    console.log('puedes jugar');
} else {
    console.log('no puedes jugar');
}

Act practica calcular año biciesto -----------------------------------------

let anio 
anio = prompt ('Escribe el año')

if ( (anio != "") && (anio % 4 === 0) && (anio % 100 === 0) || (anio % 400 === 0) ) {
    document.write('biciesto');
} else {
    document.write('no biciesto');
}

Act practica calcular numero par -----------------------------------------

let par
par = prompt('escribe un numero')
par = parseInt()

if ( par%2 ===0) {
    alert('numero par')
} else {
    alert ('numero impar')
} 

// Act practica bucle - ciclos -----------------------------------------

for (let i = 0; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(`${i} es numero par`);
    } else {
        console.log(`${i} es numero impar`);
    }
} 

//  Act practica variables y arrays ----------------------------------------- 

const nota1 = 10;
const nota2 = 3;
const nota3 = 4;
const nota4 = 7;
const nota5 = 1;

const todaslasnotas = [10, 3, 4, 7, 1]

console.log(nota1)
console.log(todaslasnotas[0])
console.log(todaslasnotas)

for (let i = 0; i < todaslasnotas.length; i++) {
    console.log(todaslasnotas[i])
} 

//  Aprendiendo el lenght y los incrementos ----------------------------------------- 

for (valor inicial; condicioh para terminar; incremento)

for (let i = 0; i < nombreDelProducto.length; i += 2) {
    let valor = nombreDelProducto[i];
    ...
}
                        =
for (let valor of nombreDelProducto) {
    ...
} */

//  Act practica for y acumulador ----------------------------------------- 

const nombreDelProducto = ['Nike', 'Adidas', 'Air']

let acumulador = "";
for (let i = 0; i < nombreDelProducto.length; i++) {
    acumulador += `<h1>Hola -> ${nombreDelProducto[i]}</h1>`;
    console.log(acumulador)
}
document.write(acumulador)






