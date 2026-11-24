class Cofre{
<<<<<<< HEAD
    #codigo 
    constructor(codigo){
        this.#codigo = codigo
    } 

    verificarCodigo(valor) {
        if(valor === this.#codigo){
            return true
        }
            return false
        
    }
}

const cofre= new Cofre("1234")
console.log(cofre.verificarCodigo("1234"))
console.log(cofre.verificarCodigo("123"))
console.log(cofre.verificarCodigo("12"))

module.exports = cofre
=======
    #codigo

    constructor(codigo){
        this.#codigo = codigo
    }

    verificarCodigo(codigo){
        if(codigo == this.#codigo){
            return true
        } else{
            return false
        }
    }
}

const senha = new Cofre(1234)

module.exports = senha
>>>>>>> 3b2f5ac483a3d741c6230d400f99c443b489759d
