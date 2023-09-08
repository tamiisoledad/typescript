"use strict";
const arreglo = ['a', 'b', 'c'];
const arregloTipoUnion = ['a', 1, 'b', 2];
const tupla = ['a', 10, true, 20];
const promesa1 = Promise.resolve(true);
const promesa2 = Promise.resolve({ a: 'valor de a', b: 20 });
Promise.all([promesa1, promesa2])
    .then(([valorRetornoPromesa1, valorRetornoPromesa2]) => {
    console.log(valorRetornoPromesa1, valorRetornoPromesa2);
});
