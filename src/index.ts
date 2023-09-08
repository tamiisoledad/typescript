let mensaje:string = 'Hola TypeScript';
console.log(mensaje)

// Tipos basicos
const arregloString: string[] = ['a', 'b', 'c'];

const arregloString2: Array<string> = ['a', 'b', 'c'];

interface Persona {
    nombre: string,
    apellido: undefined
}

const arregloPersonas: Array<Persona> = [{nombre: 'Pablo', apellido: undefined}, {nombre: 'Pedro', apellido: undefined}]

let variableNula: null = null

const calculo = (x: number, y: number): number => {
    return x * y
}

const filtro = (valor: string): boolean => {
    return valor.length >= 5;
}

const animales: string[] = ['perro', 'gato', 'pez']

const animalesFiltrados = animales.filter(filtro)

console.log(animalesFiltrados)

let cualquierValor: any = 'string' // mala practica

cualquierValor = 10

let variableUnknown: unknown = 10; // para parametros que no se el dato

const lanzarError = (mensajeError: string): never => {
    throw new Error(mensajeError)
}

const saludar = (mensajeSaludo: string): void => {
    console.log(mensajeSaludo)
}

saludar('Hola')
// lanzarError('error')

// Tipos avanzados
let fechaDeNacimiento: string | Date;

let pruebaTresTipos: string | number | boolean;
pruebaTresTipos = 'Soy un string';
pruebaTresTipos = 123;
pruebaTresTipos = true

const calcularPromedio = (valores: number | number[], total?: number): number | never => {
    if (typeof valores === 'number' && total) {
        return valores / total
    }

    if (Array.isArray(valores) && valores.length > 0) {
        return valores.reduce((acc, val) => acc + val, 0) / valores.length;
    }

    throw new Error('Parametros no son validos')
}

calcularPromedio([10, 34, 56, 78])
calcularPromedio(156, 21)
calcularPromedio(0, 3)
// calcularPromedio([])

// definicion de tipos
type Perro = 'perro';
type Gato = 'gato';
type Mascota = Perro | Gato;

let mascota: Mascota = 'perro';