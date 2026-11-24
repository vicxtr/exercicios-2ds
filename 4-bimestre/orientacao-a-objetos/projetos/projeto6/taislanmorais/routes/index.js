const express = require("express")

const router = express.Router()

const aulasRouter = require("./aulas")
const alunosRouter = require("./alunos")

router.get("/", (req, res) => {
    res.status(200).json({
        mensagem: "API de Academia"
    })
})


router.use("/aulas", aulasRouter)

router.use("/alunos", alunosRouter)

module.exports = router