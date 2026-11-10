
const express = require("express")
const sessoesRouter = require("./routes/sessoes")

const app = express()

app.use(express.json())

app.use("/sessoes", sessoesRouter)

app.use((req, res, next) => {
    const erro = new Error("Rota nao encontrada")
    erro.status = 404
    next(erro)
})

app.use((erro, req, res, next) => {
    res.status(erro.status || 500).json({
        erro: erro.message
    })
})

module.exports = app
