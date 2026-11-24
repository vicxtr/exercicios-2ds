class Livro {
<<<<<<< HEAD
    constructor(titulo, autor, ano){
=======
    constructor(titulo, autor, ano) {
>>>>>>> 3b2f5ac483a3d741c6230d400f99c443b489759d
        this.titulo = titulo
        this.autor = autor
        this.ano = ano
        this.disponivel = true
    }
<<<<<<< HEAD
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
=======

    emprestar() {
        if (this.disponivel) {
            this.disponivel = false
        }
    }

    devolver() {
        if (!this.disponivel) {
            this.disponivel = true
        }
    }

    estaDisponivel() {
        return this.disponivel
    }
}

module.exports = Livro
>>>>>>> 3b2f5ac483a3d741c6230d400f99c443b489759d
