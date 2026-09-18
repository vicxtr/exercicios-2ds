class Material {

  #titulo
  #edicao

  constructor(titulo, edicao) {
    this.#titulo = titulo
    this.#edicao = edicao
  }

  get titulo() {
    return this.#titulo
  }

  get edicao() {
    return this.#edicao
  }

  descricao() {
    return "Material cadastrado no catálogo"
  }

}

module.exports = Material