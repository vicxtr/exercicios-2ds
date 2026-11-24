class Livro {
<<<<<<< HEAD
    constructor(titulo, autor){
        this.titulo = titulo
        this.autor = autor
    }
    descricao(){
=======
    constructor(titulo, autor) {
        this.titulo = titulo
        this.autor = autor
    }

    descricao() {
>>>>>>> 3b2f5ac483a3d741c6230d400f99c443b489759d
        return `Livro: ${this.titulo} - ${this.autor}`
    }
}

<<<<<<< HEAD
const livro1 = new Livro("Dom Casmurro", "Machado de Assis")

console.log(livro1.descricao())

module.exports = livro1
=======
const livro = new Livro("Dom Casmurro", "Machado de Assis")

module.exports = livro
>>>>>>> 3b2f5ac483a3d741c6230d400f99c443b489759d
