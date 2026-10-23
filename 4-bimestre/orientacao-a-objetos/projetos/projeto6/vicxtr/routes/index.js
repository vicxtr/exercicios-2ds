const express = require('express')

const router = express.Router()

const produtosRouter = require('./produtos')
const clientesRouter = require('./clientes')

router.get('/', (req, res) => {
  res.status(200).json({
    mensagem: 'API de Farmacia'
  })
})

router.use('/produtos', produtosRouter)
router.use('/clientes', clientesRouter)

module.exports = router