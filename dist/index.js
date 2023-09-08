"use strict";
let mensaje = 'Hola TypeScript';
console.log(mensaje);
const arregloString = ['a', 'b', 'c'];
const arregloString2 = ['a', 'b', 'c'];
const arregloPersonas = [{ nombre: 'Pablo', apellido: undefined }, { nombre: 'Pedro', apellido: undefined }];
let variableNula = null;
const calculo = (x, y) => {
    return x * y;
};
const filtro = (valor) => {
    return valor.length >= 5;
};
const animales = ['perro', 'gato', 'pez'];
const animalesFiltrados = animales.filter(filtro);
console.log(animalesFiltrados);
let cualquierValor = 'string';
cualquierValor = 10;
let variableUnknown = 10;
const lanzarError = (mensajeError) => {
    throw new Error(mensajeError);
};
const saludar = (mensajeSaludo) => {
    console.log(mensajeSaludo);
};
saludar('Hola');
let fechaDeNacimiento;
let pruebaTresTipos;
pruebaTresTipos = 'Soy un string';
pruebaTresTipos = 123;
pruebaTresTipos = true;
const calcularPromedio = (valores, total) => {
    if (typeof valores === 'number' && total) {
        return valores / total;
    }
    if (Array.isArray(valores) && valores.length > 0) {
        return valores.reduce((acc, val) => acc + val, 0) / valores.length;
    }
    throw new Error('Parametros no son validos');
};
calcularPromedio([10, 34, 56, 78]);
calcularPromedio(156, 21);
calcularPromedio(0, 3);
let mascota = 'perro';
