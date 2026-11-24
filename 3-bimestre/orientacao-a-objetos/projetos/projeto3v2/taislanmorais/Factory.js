const {
    Transferencia,
    Devolucao,
    Amostra
} = require("./GuiaRemessa")


class Factory {

    static criar(tipo, produto) {

        switch (tipo) {

            case "transferencia":
                return new Transferencia(produto)

            case "devolucao":
                return new Devolucao(produto)

            case "amostra":
                return new Amostra(produto)

            default:
                throw new Error("Tipo de guia inválido")
        }
    }
}


module.exports = Factory