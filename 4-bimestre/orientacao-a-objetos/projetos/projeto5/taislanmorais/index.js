
const { carregarConfig } = require("./config")

function handler(req, res) {
    const config = carregarConfig()

    if (req.url === "/") {
        res.statusCode = 200
        res.end(`Status do servico: ${config.servico}`)
        return;
    }

    if (req.url === "/batida") {
        res.statusCode = 200
        res.end("batida")
        return
    }

    if (req.url === "/status") {
        res.statusCode = 200
        res.setHeader("Content-Type", "application/json")

        const status = {
            online: true,
            servico: config.servico,
            porta: config.porta,
            ambiente: config.ambiente
        };

        res.end(JSON.stringify(status))
        return;
    }

    res.statusCode = 404;
    res.end("Rota nao encontrada")
}

module.exports = handler
