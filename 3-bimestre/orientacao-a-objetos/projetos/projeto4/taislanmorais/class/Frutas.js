const Cultivo = require("./Cultivo")

class Frutas extends Cultivo {
    constructor(nome, areaEmHectares) {
        super(nome, areaEmHectares)
    }

    descricao() {
        return "Cultivo de frutas em monitoramento"
    }
}

module.exports = Frutas