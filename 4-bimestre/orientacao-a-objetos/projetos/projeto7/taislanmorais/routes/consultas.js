
const express = require("express")
const validarConsulta = require("../middlewares/validarConsulta")

const router = express.Router()

const consultas = [
    {
        id: 1,
        paciente: "Ana",
        exame: "Hemograma",
        valor: 60,
        situacao: "cancelada"
    },
    {
        id: 2,
        paciente: "Bruno",
        exame: "Raio-X",
        valor: 150,
        situacao: "realizada"
    },
    {
        id: 3,
        paciente: "Carla",
        exame: "Ressonancia",
        valor: 800,
        situacao: "realizada"
    }
]


router.get("/", (req, res) => {
    let resultado = consultas

    const { situacao, valorMin } = req.query

    if (situacao) {
        resultado = resultado.filter(
            consulta => consulta.situacao === situacao
        )
    }

    if (valorMin !== undefined) {
        const minimo = Number(valorMin)

        resultado = resultado.filter(
            consulta => consulta.valor >= minimo
        )
    }

    res.status(200).json(resultado)
})


router.get("/:id", (req, res, next) => {
    const id = Number(req.params.id)

    const consulta = consultas.find(
        consulta => consulta.id === id
    )

    if (!consulta) {
        const erro = new Error("Consulta nao encontrado")
        erro.status = 404

        return next(erro)
    }

    res.status(200).json(consulta)
})

router.post("/", validarConsulta, (req, res) => {
    const maiorId = consultas.reduce(
        (maior, consulta) => Math.max(maior, consulta.id),
        0
    )

    const novaConsulta = {
        id: maiorId + 1,
        paciente: req.body.paciente,
        exame: req.body.exame,
        valor: req.body.valor,
        situacao: "agendada"
    }

    consultas.push(novaConsulta)

    res.status(201).json({
        mensagem: "Registro de consulta criado"
    })
})

module.exports = router
