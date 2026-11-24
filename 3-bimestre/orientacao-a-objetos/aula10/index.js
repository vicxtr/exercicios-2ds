<<<<<<< HEAD
class Produto {
    #preco

    constructor(preco) {
        this.#preco = preco
    }

    get preco() {
        return this.#preco
    }

    set preco(novoPreco) {
        if (novoPreco >= 0) {
            this.#preco = novoPreco
=======
class Produto{
    #preco
    constructor(preco){
        this.#preco = preco
    }
    get preco(){
        return this.#preco
    }
    set preco(novopreco){
        if(novopreco >= 0){
            this.#preco = novopreco
>>>>>>> 3b2f5ac483a3d741c6230d400f99c443b489759d
        }
    }
}

<<<<<<< HEAD
const produto = new Produto(100)

module.exports = produto
=======
const produto100 = new Produto(100)
module.exports = produto100
>>>>>>> 3b2f5ac483a3d741c6230d400f99c443b489759d
