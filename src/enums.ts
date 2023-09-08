// tipo numerico
enum Pisos {
    Primero = 1,
    Segundo,
    Tercero
}

// tipo string
enum TipoCuarto {
    Individual = 'individual',
    Doble = 'doble',
    Triple = 'triple'
}

let piso: Pisos = Pisos.Primero;

interface OtroCuarto {
    id: number,
    tipo: TipoCuarto,
    piso: Pisos,
    precioNoche: number
}

const cuarto: OtroCuarto = {
    id: 10,
    tipo: TipoCuarto.Individual,
    piso: Pisos.Segundo,
    precioNoche: 80
}