class Cofre{
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