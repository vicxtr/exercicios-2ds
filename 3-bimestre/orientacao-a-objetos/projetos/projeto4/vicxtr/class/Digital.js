const Material = require("./Material")

class Digital extends Material {

  constructor(titulo, edicao) {
    super(titulo, edicao)
  }

  descricao() {
    return "Material digital disponível para venda"
  }

}

module.exports = Digital