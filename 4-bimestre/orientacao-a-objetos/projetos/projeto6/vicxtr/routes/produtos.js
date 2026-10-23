const express = require('express')

const router = express.Router()

const produtos = [
  { id: 1, nome: 'Dipirona', categoria: 'medicamento', preco: 12, emEstoque: true },
  { id: 2, nome: 'Protetor Solar', categoria: 'cuidado', preco: 48, emEstoque: true },
  { id: 3, nome: 'Termometro', categoria: 'equipamento', preco: 65, emEstoque: false }
]

router.get('/', (req, res) => {
  res.status(200).json(produtos)
})

router.get('/em-estoque', (req, res) => {
  const produtosEmEstoque = produtos.filter(produto => produto.emEstoque === true)

  res.status(200).json(produtosEmEstoque)
})

router.get('/total', (req, res) => {
  res.status(200).json({
    total: produtos.length
  })
})

router.post('/', (req, res) => {
  res.status(201).json({
    mensagem: 'Cadastro de produto realizado'
  })
})

module.exports = router