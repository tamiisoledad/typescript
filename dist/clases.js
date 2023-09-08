"use strict";
class Vehiculo {
    constructor(marca, color, numeroRuedas = 0) {
        this._marca = marca;
        this._color = color;
        this._numeroRuedas = numeroRuedas;
    }
    descripcionVehiculo() {
        return `El vehiculo es de marca ${this._marca} y es de color ${this._color}`;
    }
    moverse() {
        return `El vehiculo se mueve a una velocidad de ${this.obtenerVelocidad()}`;
    }
    obtenerVelocidad() {
        return '100 km/h';
    }
}
class Persona1 {
    get nombreCompleto() {
        return this._nombreCompleto;
    }
    set nombreCompleto(valor) {
        this._nombreCompleto = valor;
    }
    get edad() {
        return this._edad;
    }
    set edad(valor) {
        this._edad = valor;
    }
    get profesion() {
        return this._profesion;
    }
    set profesion(valor) {
        this._profesion = valor;
    }
}
const nuevaPersona = new Persona1();
nuevaPersona.edad = 24;
nuevaPersona.nombreCompleto = 'Pepe Perez';
nuevaPersona.profesion = 'empleado';
class Avion extends Vehiculo {
    constructor(marca, color, largoAlas) {
        super(marca, color);
        this._largoAlas = largoAlas;
    }
    descripcionVehiculo() {
        return `El avion es de marca ${this._marca} y de color ${this._color}`;
    }
    moverse() {
        return `El avion se mueve a una velocidad de ${this.obtenerVelocidad()}`;
    }
}
const miVehiculo = new Avion('Boeing', 'negro', 2);
console.log(miVehiculo.descripcionVehiculo());
console.log(miVehiculo.moverse());
