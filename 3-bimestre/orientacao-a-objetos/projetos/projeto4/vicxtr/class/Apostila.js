const Material = require("./Material")

class Apostila extends Material {

  constructor(titulo, edicao) {
    super(titulo, edicao)
    this.registros = []
  }

  descricao() {
    return "Apostila disponível para venda"
  }

  adicionarRegistro(pedido) {
    this.registros.push(pedido)
  }

}

module.exports = Apostila