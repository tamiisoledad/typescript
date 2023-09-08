"use strict";
var Pisos;
(function (Pisos) {
    Pisos[Pisos["Primero"] = 1] = "Primero";
    Pisos[Pisos["Segundo"] = 2] = "Segundo";
    Pisos[Pisos["Tercero"] = 3] = "Tercero";
})(Pisos || (Pisos = {}));
var TipoCuarto;
(function (TipoCuarto) {
    TipoCuarto["Individual"] = "individual";
    TipoCuarto["Doble"] = "doble";
    TipoCuarto["Triple"] = "triple";
})(TipoCuarto || (TipoCuarto = {}));
let piso = Pisos.Primero;
const cuarto = {
    id: 10,
    tipo: TipoCuarto.Individual,
    piso: Pisos.Segundo,
    precioNoche: 80
};
