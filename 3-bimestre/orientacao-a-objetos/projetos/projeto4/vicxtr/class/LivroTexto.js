const Material = require("./Material")

class LivroTexto extends Material {

  constructor(titulo, edicao) {
    super(titulo, edicao)
  }

  descricao() {
    return "Livro-texto disponível para venda"
  }

}

module.exports = LivroTexto