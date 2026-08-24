class Livro {
    constructor(titulo, autor, ano){
        this.titulo = titulo
        this.autor = autor
        this.ano = ano
        this.disponivel = true
    }
    emprestar(){
        this.disponivel = false
    }
    devolver(){
        this.disponivel = true
    }
    estaDisponivel(){
      return  (this.disponivel)
    }
}

module.exports = Livro 