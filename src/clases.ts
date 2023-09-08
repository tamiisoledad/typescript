type Color = 'negro' | 'rojo' | 'azul' | 'amarillo';

abstract class Vehiculo {
    _marca: string;
    _color: Color;
    _numeroRuedas: number;

    constructor(marca: string, color: Color, numeroRuedas: number = 0) {
        this._marca = marca;
        this._color = color;
        this._numeroRuedas = numeroRuedas;
    }

    descripcionVehiculo(): string {
        return `El vehiculo es de marca ${this._marca} y es de color ${this._color}`;
    }

    moverse(): string {
        return `El vehiculo se mueve a una velocidad de ${this.obtenerVelocidad()}`
    }

    protected obtenerVelocidad(): string {
        return '100 km/h'
    }
}

// modificadores
type Profesion = 'estudiante' | 'empleado' | 'desempleado';

class Persona1 {
    private _nombreCompleto: string | undefined;
    private _edad: number | undefined;
    private _profesion: Profesion | undefined;

    // modificadores de nombre
    get nombreCompleto(): string | undefined {
        return this._nombreCompleto;
    }

    set nombreCompleto(valor: string | undefined) {
        this._nombreCompleto = valor;
    }

    // modificadores de edad
    get edad(): number | undefined {
        return this._edad;
    }

    set edad(valor: number | undefined) {
        this._edad = valor;
    }

    // modificadores de profesion
    get profesion(): Profesion | undefined {
        return this._profesion;
    }

    set profesion(valor: Profesion | undefined) {
        this._profesion = valor
    }
}

const nuevaPersona = new Persona1();
nuevaPersona.edad = 24;
nuevaPersona.nombreCompleto = 'Pepe Perez';
nuevaPersona.profesion = 'empleado';

// Herencia
class Avion extends Vehiculo {
    _largoAlas: number;

    constructor(marca: string, color: Color, largoAlas: number) {
        super(marca, color);
        this._largoAlas = largoAlas;
    }

    descripcionVehiculo(): string {
        return `El avion es de marca ${this._marca} y de color ${this._color}`
    }

    moverse(): string {
        return `El avion se mueve a una velocidad de ${this.obtenerVelocidad()}`
    }
}

const miVehiculo = new Avion('Boeing', 'negro', 2);
console.log(miVehiculo.descripcionVehiculo());
console.log(miVehiculo.moverse())