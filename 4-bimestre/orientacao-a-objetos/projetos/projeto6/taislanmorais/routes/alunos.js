const express = require("express")

const router = express.Router()

const alunos = [
    {
        id: 1,
        nome: "Ana",
        plano: "trimestral"
    },
    {
        id: 2,
        nome: "Bruno",
        plano: "anual"
    }
]


router.get("/", (req, res) => {
    res.status(200).json(alunos)
})

router.get("/total", (req, res) => {
    res.status(200).json({
        total: alunos.length
    })
})

module.exports = router