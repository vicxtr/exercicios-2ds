
const fs = require("fs/promises")

const ARQUIVO = process.env.ARQUIVO_REPAROS || "reparos.json"


async function listar() {
    try {
        const conteudo = await fs.readFile(ARQUIVO, "utf-8")

        return JSON.parse(conteudo)
    } catch (erro) {
       
        if (erro.code === "ENOENT") {
            return []
        }

        throw erro
    }
}

async function salvar(reparo) {
    const lista = await listar()


    lista.push(reparo)

    await fs.writeFile(
        ARQUIVO,
        JSON.stringify(lista, null, 2),
        "utf-8"
    )

    return reparo
}


async function atualizar(id, dados) {
    const lista = await listar()

    const indice = lista.findIndex(
        reparo => reparo.id === id
    )

  
    if (indice === -1) {
        return null
    }

  
    const reparoAtualizado = {
        ...lista[indice],
        ...dados,
        id: lista[indice].id
    }


    lista[indice] = reparoAtualizado


    await fs.writeFile(
        ARQUIVO,
        JSON.stringify(lista, null, 2),
        "utf-8"
    )

    return reparoAtualizado
}

async function remover(id) {
    const lista = await listar()


    const indice = lista.findIndex(
        reparo => reparo.id === id
    );


    if (indice === -1) {
        return false
    }

   
    lista.splice(indice, 1)

    await fs.writeFile(
        ARQUIVO,
        JSON.stringify(lista, null, 2),
        "utf-8"
    )

    return true
}


module.exports = {
    listar,
    salvar,
    atualizar,
    remover
}
