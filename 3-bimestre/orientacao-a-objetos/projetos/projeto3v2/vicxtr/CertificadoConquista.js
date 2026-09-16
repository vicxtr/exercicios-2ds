class CertificadoConquista {
    constructor(jogador) {
        this.jogador = jogador
    }

    emitir() {
        throw new Error("O método emitir() deve ser implementado.")
    }
}

class Bronze extends CertificadoConquista {
    emitir() {
        return `Certificado de conquista bronze emitido para: ${this.jogador}`
    }
}

class Prata extends CertificadoConquista {
    emitir() {
        return `Certificado de conquista prata emitido para: ${this.jogador}`
    }
}

class Ouro extends CertificadoConquista {
    emitir() {
        return `Certificado de conquista ouro emitido para: ${this.jogador}`
    }
}

module.exports = CertificadoConquista
module.exports.Bronze = Bronze
module.exports.Prata = Prata
module.exports.Ouro = Ouro
