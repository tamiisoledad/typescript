// interfaces
interface Huesped {
    idHuesped: string,
    nombre: string,
    apellido: string,
    correo: string,
    telefono?: string
}

type Piso = 'primer piso' | 'segundo piso';

interface Cuarto {
    id: number,
    tipo: 'individual' | 'doble' |'triple',
    piso: Piso,
    precioNoche: number
}

interface Reservacion {
    idReservacion: string,
    huesped: Huesped,
    fechaEntrada: Date,
    fechaSalida: Date,
    cuarto: Cuarto,
    nochesReservadas?: number
}

const datosHuesped: Huesped = {
    idHuesped: '01',
    nombre: 'Dennis',
    apellido: 'Lizano',
    correo: 'dennis@c.com',
    telefono: '00554477'
}

const reservacion: Reservacion = {
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
}

const nombrePropiedad: keyof Huesped = 'nombre';

const retornarValor = (huesped: Huesped, key: keyof Huesped) =>{
    return huesped[key]
}

console.log(retornarValor(datosHuesped, 'correo'))

// extendiendo interfaces
interface AA {
    a: string,
    b: number,
    c: boolean
}

interface BB extends AA {
    d: Array<string>
}

interface CC {
    x: string | number
}

interface DD extends AA, CC {
    y: number | undefined
}

const instanciaBB: BB = {
    a: 'a',
    b: 0,
    c: true,
    d: ['a', 'b']
}

const instanciaDD: DD = {
    a: 'a',
    b: 0,
    c: true,
    x: 20,
    y: undefined
}