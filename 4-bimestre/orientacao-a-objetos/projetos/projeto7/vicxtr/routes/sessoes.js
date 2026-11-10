
const express = require("express")
const validarSessao = require("../middlewares/validarSessao")

const router = express.Router()

const sessoes = [
    {
        id: 1,
        cliente: "Ana",
        arte: "Minimalista",
        horas: 2,
        situacao: "concluida"
    },
    {
        id: 2,
        cliente: "Bruno",
        arte: "Geometrica",
        horas: 4,
        situacao: "confirmada"
    },
    {
        id: 3,
        cliente: "Carla",
        arte: "Realista",
        horas: 8,
        situacao: "confirmada"
    }
]

router.get("/", (req, res) => {
    let resultado = sessoes

    const { situacao, horasMin } = req.query

    if (situacao) {
        resultado = resultado.filter(sessao => sessao.situacao === situacao)
    }

    if (horasMin !== undefined) {
        resultado = resultado.filter(sessao => sessao.horas >= Number(horasMin))
    }

    res.status(200).json(resultado)
})

router.get("/:id", (req, res, next) => {
    const id = Number(req.params.id)

    const sessao = sessoes.find(sessao => sessao.id === id)

    if (!sessao) {
        const erro = new Error("Sessao nao encontrado")
        erro.status = 404
        return next(erro)
    }

    res.status(200).json(sessao)
})

router.post("/", validarSessao, (req, res) => {
    const { cliente, arte, horas } = req.body

    const novoId = Math.max(...sessoes.map(sessao => sessao.id)) + 1

    const novaSessao = {
        id: novoId,
        cliente,
        arte,
        horas,
        situacao: "orcada"
    }

    sessoes.push(novaSessao)

    res.status(201).json({
        mensagem: "Registro de sessao criado"
    })
})

module.exports = router
