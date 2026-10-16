
const { carregarConfig } = require("./config")

function handler(req, res) {
    const config = carregarConfig()

    if (req.url === "/") {
        res.statusCode = 200
        res.end(`Monitor do servico: ${config.servico}`)
    } else if (req.url === "/pulso") {
        res.statusCode = 200
        res.end("pulso")
    } else if (req.url === "/status") {
        res.statusCode = 200
        res.setHeader("Content-Type", "application/json")

        res.end(JSON.stringify({
            online: true,
            servico: config.servico,
            porta: config.porta,
            ambiente: config.ambiente
        }))
    } else {
        res.statusCode = 404
        res.end("Rota nao encontrada")
    }
}

module.exports = handler
