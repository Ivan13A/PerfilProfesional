// ######## TIPO DE VARIABLES
// const para constantes
const pi = 3.1416;
const pul = 2.54;
// var variables globales
var cant_days = 10;
var name = "Ivan Amaya";
// let para variables de bloque o clases
let count = 5;
let i = 0;

// ###### FORMAS DE IMPRESIÓN O SALIDA EN PANTALLA
// alert
// alert(name);
// console
console.log(cant_days);
console.log("10");
// body pantalla
document.write(name);
document.getElementById("text_one").innerHTML = "<h1>Ivan Amaya</h1>"
document.getElementById("text_two").innerText = "<h1>Ivan Amaya</h1>"
// librerias por ejemplo sweealert2
Swal.fire({
    icon: 'success',
    title: 'Ivan Amaya',
    text: 'Estudinate de la ufpso',
    footer: name,
    showConfirmButton: false,
    timer: 2000,
    background: '#fff',
});

// ######## TIPO DE DATOS
// Numéricos
let number_one = 10;
let number_two = 5.5;
// string
let text = "Soy un texto";
// Booleanos
let boolean = true; //false
// array
let array_num = [1, 2, 3, 4, 5, 6];
let array_text = ["Lunes", "Martes", "Miercoles", "jueves", "viernes", "sabado", "domingo"];
let array_mix = [1.5, "a", 10, "b"];
let array_mul = [
    { name: "Ivan", last_name: "Amaya", age: 18 },
    { name: "Ayelid", last_name: "Arevalo", age: 19 },
    { name: "Natalia", last_name: "Cardenas", age: 21 },
    { name: "Antonella", last_name: "Amaya", age: 1 }
];
// ###### OPERADORES BASICOS
// SUMA
var suma = number_one + number_two;
console.log("Suma = " + suma);
// RESTA
var resta = number_one - number_two;
console.log("Resta = " + resta);
// MULTIPLICACION
var multi = number_one * number_two;
console.log("Multiplicacion = " + multi);
// DIVISION
var div = number_one / number_two;
div = div.toFixed(2);
console.log("Divison = " + div);
// MODULO
var modulo = number_one % number_two;
console.log("Modulo = " + modulo);

console.log(
    "Suma = " + suma + "\n"+
    "Resta = " + resta +"\n"+
    "Multiplicacion = " + multi +"\n"+
    "Divison = " + div +"\n"+
    "Modulo = " + modulo )

var respuesta ="Suma = " + suma + "<br>" +"Resta = " + resta + "<br>" + "Multiplicacion = " + multi + "<br>" +"Divison = " + div + "<br>" + "Modulo = " + modulo ;
Swal.fire({
    icon: 'success',
    title: 'Resultados',
    html: respuesta,
    background: '#fff',
});