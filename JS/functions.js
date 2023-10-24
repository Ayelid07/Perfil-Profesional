// ***** TIPO DE VARIABLES
// const= para constantes
const pi = 3.1416;
const pul= 2.54;
// var= para variables globales
var cant_days = 10;
var name      = "Ayelid Arévalo Quintero";
// let = para variables de bloque o locales son como contadores  
let count = 5;
let i     = 0;

// ###### FORMAS DE IMPRESION O SALIDA EN PANTALLA
// alert
// alert(name);
// console
console.log(cant_days);
console.log("10");
// body - pantalla
document.write(name);
document.getElementById("text_one").innerHTML = "<h1>Ayelid Arevalo Quintero</h1>";
document.getElementById("text_one").innerText = "<h1>Ayelid Arevalo Quintero</h1>";
// LIBRERIAS
Swal.fire({
    icon: 'success',
    title: 'Ayelid Arevalo',
    text: 'Estudiante de la UFPSO',
    footer: name,
    showConfirmButton: false,
    timer: 2000,
    background:'#000'
});
// TIPOS DE DATOS
// NUMERICOS
let number_one = 10;
let number_two = 5.5;
// STRING
let text = "Soy un texto";
// BOOLEANOS
let boolean = true; // false
// ARRAY
let array_num = [1,2,3,4,5,6];
let array_tex = ["Lunes","Martes","Miercoles","Jueves","Viernes","Sabado","Domingo"];
let array_mix = [1.5, "a", 10, "b"];
let array_mul = [
    {name: "Ayelid", last_name:"Arevalo", age: 19},
    {name: "Ivan", last_name:"Amaya", age: 18},
    {name: "Natalia",last_name:"Cardenas", age: 21},
    {name: "Andres",last_name:"Coronel", age:18}
];

// ##### OPERADORES BASICOS
// SUMA
var suma = number_one + number_two;
console.log("Suma = " + suma);
// RESTA
var resta = number_one - number_two;
console.log("Resta = " + resta);
// MULTIPLICACION
var multi = number_one * number_two;
console.log("Multiplicacion =" + multi)
// DIVISION
var div = number_one / number_two;
div = div.toFixed(2);
console.log("Division = " + div);
// MOOD - MODULO  
var mod = number_one % number_two;
console.log("Módulo = " + mod);


console.log(
    "Suma = " + suma +"\n" +
    "Resta = " + resta +"\n" +
    "Multiplicacion =" + multi +"\n" +
    "Division = " + div +"\n" +
    "Módulo = " + mod +"\n"
);

var respuesta = "Suma = " + suma + "<br>" + "Resta = " + resta + "<br>" + "Multiplicacion =" + multi + "<br>" + "Division = " + div + "<br>" + "Módulo = " + mod ;

Swal.fire({
    icon: 'success',
    title: 'Resultados',
    html: respuesta,
    background: '#fff'
});