
function validarSessao(req, res, next) {
    const { cliente, arte, horas } = req.body

    if (!cliente) {
        const erro = new Error("O campo cliente e obrigatorio")
        erro.status = 400
        return next(erro)
    }

    if (!arte) {
        const erro = new Error("O campo arte e obrigatorio")
        erro.status = 400
        return next(erro)
    }

    if (typeof horas !== "number" || !Number.isFinite(horas)) {
        const erro = new Error("O campo horas deve ser um numero")
        erro.status = 400
        return next(erro)
    }

    if (horas <= 0) {
        const erro = new Error("O campo horas deve ser maior que zero")
        erro.status = 400
        return next(erro)
    }

    next()
}

module.exports = validarSessao
