const Apostila = require("./Apostila")
const LivroTexto = require("./LivroTexto")
const Digital = require("./Digital")

class MaterialFactory {

  static criar(tipo, titulo, edicao) {

    if (tipo === "apostila") {
      return new Apostila(titulo, edicao)
    }

    if (tipo === "livrotexto") {
      return new LivroTexto(titulo, edicao)
    }

    if (tipo === "digital") {
      return new Digital(titulo, edicao)
    }

    throw new Error("Tipo de material inválido")

  }

}

module.exports = MaterialFactory