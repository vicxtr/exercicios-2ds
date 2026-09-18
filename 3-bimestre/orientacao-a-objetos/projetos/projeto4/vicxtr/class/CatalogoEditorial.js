class CatalogoEditorial {

  constructor(nome) {
    this.nome = nome
    this.categorias = []
    this.membros = []
  }

  adicionarCategoria(editora) {
    this.categorias.push(editora)
  }

  adicionarMembro(material) {
    this.membros.push(material)
  }

}

module.exports = CatalogoEditorial