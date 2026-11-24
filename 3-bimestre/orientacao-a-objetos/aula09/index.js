<<<<<<< HEAD
class Usuario {
    #nome

    constructor(nome) {
        this.#nome = nome
    }

    get nome() {
=======
class Usuario{
    #nome
    constructor(nome){
        this.#nome = nome
    }

    get nome(){
>>>>>>> 3b2f5ac483a3d741c6230d400f99c443b489759d
        return this.#nome
    }
}

const usuario = new Usuario("John")
<<<<<<< HEAD

module.exports = usuario
=======
module.exports = usuario;
>>>>>>> 3b2f5ac483a3d741c6230d400f99c443b489759d
