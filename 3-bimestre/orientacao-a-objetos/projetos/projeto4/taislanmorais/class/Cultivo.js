class Cultivo {
    #nome
    #areaEmHectares

    constructor(nome, areaEmHectares) {
        this.#nome = nome
        this.#areaEmHectares = areaEmHectares
    }

    get nome() {
        return this.#nome
    }

    get areaEmHectares() {
        return this.#areaEmHectares
    }

    descricao() {
        return "Cultivo cadastrado no sistema"
    }
}

module.exports = Cultivo