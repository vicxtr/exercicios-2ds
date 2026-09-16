const CertificadoConquista = require("./CertificadoConquista")

class Factory {
    static criar(tipo, jogador) {
        switch (tipo) {
            case "bronze":
                return new CertificadoConquista.Bronze(jogador)

            case "prata":
                return new CertificadoConquista.Prata(jogador)

            case "ouro":
                return new CertificadoConquista.Ouro(jogador)

            default:
                throw new Error("Tipo de certificado inválido")
        }
    }
}

module.exports = Factory
