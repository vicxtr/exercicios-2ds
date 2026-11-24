const Cultivo = require("./Cultivo")

class Graos extends Cultivo {
    constructor(nome, areaEmHectares) {
        super(nome, areaEmHectares)

        this.registros = []
    }

    descricao() {
        return "Cultivo de grãos em monitoramento"
    }

    adicionarRegistro(registro) {
        this.registros.push(registro)
    }
}

module.exports = Graos