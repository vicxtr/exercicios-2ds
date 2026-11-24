
function validarConsulta(req, res, next) {

    const { paciente, exame, valor } = req.body

    if (!paciente) {
        const erro = new Error("O campo paciente e obrigatorio")
        erro.status = 400

        return next(erro)
    }

    if (!exame) {
        const erro = new Error("O campo exame e obrigatorio")
        erro.status = 400

        return next(erro)
    }

    if (typeof valor !== "number" || !Number.isFinite(valor)) {
        const erro = new Error("O campo valor deve ser um numero")
        erro.status = 400

        return next(erro)
    }

    if (valor <= 0) {
        const erro = new Error("O campo valor deve ser maior que zero")
        erro.status = 400

        return next(erro)
    }

    next()
}

module.exports = validarConsulta
