<<<<<<< HEAD
=======

>>>>>>> 3b2f5ac483a3d741c6230d400f99c443b489759d
const projeto = {
    nome: "aula01",

    scripts: ["test", "start", "dev"],

    rodar(script) {
        return `Executando: npm run ${script}`
    },

    temScript(script) {
        return this.scripts.includes(script)
    }
}

<<<<<<< HEAD
module.exports = projeto
=======
module.exports = projeto
>>>>>>> 3b2f5ac483a3d741c6230d400f99c443b489759d
