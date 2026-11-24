const express = require("express")

const router = express.Router()

const aulas = [
    {
        id: 1,
        nome: "Spinning",
        modalidade: "cardio",
        vagas: 20,
        ativa: true
    },
    {
        id: 2,
        nome: "Funcional",
        modalidade: "forca",
        vagas: 15,
        ativa: true
    },
    {
        id: 3,
        nome: "Pilates",
        modalidade: "mobilidade",
        vagas: 10,
        ativa: false
    }
]


router.get("/", (req, res) => {
    res.status(200).json(aulas)
})


router.get("/ativas", (req, res) => {
    const aulasAtivas = aulas.filter(
        aula => aula.ativa === true
    )

    res.status(200).json(aulasAtivas)
})


router.get("/total", (req, res) => {
    res.status(200).json({
        total: aulas.length
    })
})

router.post("/", (req, res) => {
    res.status(201).json({
        mensagem: "Cadastro de aula realizado"
    })
})

module.exports = router