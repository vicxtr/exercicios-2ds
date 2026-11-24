const Cultivo = require("./Cultivo")

class Hortalicas extends Cultivo {
    constructor(nome, areaEmHectares) {
        super(nome, areaEmHectares)
    }

    descricao() {
        return "Cultivo de hortaliças em monitoramento"
    }
}

module.exports = Hortalicas