<<<<<<< HEAD
class Usuario {
    static quantidade = 0

    constructor(nome) {
=======
class Usuario{
    static quantidade = 0

    constructor(nome){
>>>>>>> 3b2f5ac483a3d741c6230d400f99c443b489759d
        this.nome = nome
        Usuario.quantidade++
    }

<<<<<<< HEAD
    static quantidadeUsuarios() {
        return Usuario.quantidade
=======
    static quantidadeUsuarios(){
        return this.quantidade
>>>>>>> 3b2f5ac483a3d741c6230d400f99c443b489759d
    }
}

const usuario1 = new Usuario("Ana")
const usuario2 = new Usuario("Carlos")
const usuario3 = new Usuario("Maria")

<<<<<<< HEAD
module.exports = {
    Usuario,
    usuario1,
    usuario2,
    usuario3
}
=======
module.exports = { Usuario, usuario1, usuario2, usuario3}
>>>>>>> 3b2f5ac483a3d741c6230d400f99c443b489759d
