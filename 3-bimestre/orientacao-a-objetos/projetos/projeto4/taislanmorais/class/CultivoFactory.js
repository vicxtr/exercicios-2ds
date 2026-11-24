const Graos = require("./Graos")
const Frutas = require("./Frutas")
const Hortalicas = require("./Hortalicas")

class CultivoFactory {
    static criar(tipo, nome, areaEmHectares) {
        switch (tipo) {
            case "graos":
                return new Graos(nome, areaEmHectares)

            case "frutas":
                return new Frutas(nome, areaEmHectares)

            case "hortalicas":
                return new Hortalicas(nome, areaEmHectares)

            default:
                throw new Error("Tipo de cultivo inválido")
        }
    }
}

module.exports = CultivoFactory