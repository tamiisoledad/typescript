"use strict";
const datosHuesped = {
    idHuesped: '01',
    nombre: 'Dennis',
    apellido: 'Lizano',
    correo: 'dennis@c.com',
    telefono: '00554477'
};
const reservacion = {
    idReservacion: 'r01',
    huesped: datosHuesped,
    fechaEntrada: new Date('2023/10/28'),
    fechaSalida: new Date('2023/11/05'),
    cuarto: {
        id: 10,
        tipo: 'individual',
        piso: 'primer piso',
        precioNoche: 80
    },
    nochesReservadas: 3
};
const nombrePropiedad = 'nombre';
const retornarValor = (huesped, key) => {
    return huesped[key];
};
console.log(retornarValor(datosHuesped, 'correo'));
const instanciaBB = {
    a: 'a',
    b: 0,
    c: true,
    d: ['a', 'b']
};
const instanciaDD = {
    a: 'a',
    b: 0,
    c: true,
    x: 20,
    y: undefined
};
