class GuiaRemessa {
    constructor(produto) {
        this.produto = produto
    }

    emitir() {
        throw new Error("O método emitir() deve ser implementado")
    }
}


class Transferencia extends GuiaRemessa {
    emitir() {
        return `Guia de transferência emitida para: ${this.produto}`
    }
}


class Devolucao extends GuiaRemessa {
    emitir() {
        return `Guia de devolução emitida para: ${this.produto}`
    }
}


class Amostra extends GuiaRemessa {
    emitir() {
        return `Guia de amostra emitida para: ${this.produto}`
    }
}


module.exports = GuiaRemessa
module.exports.Transferencia = Transferencia
module.exports.Devolucao = Devolucao
module.exports.Amostra = Amostra