<<<<<<< HEAD
=======

>>>>>>> 3b2f5ac483a3d741c6230d400f99c443b489759d
const express = require("express")

const app = express()

const livros = [
    {
        id: 1,
        titulo: "Dom Casmurro",
        autor: "Machado de Assis"
    },
    {
        id: 2,
        titulo: "O Cortico",
        autor: "Aluisio Azevedo"
    }
]

app.get("/", (req, res) => {
    res.json({
        mensagem: "API de Livros"
    })
})

<<<<<<< HEAD
=======

>>>>>>> 3b2f5ac483a3d741c6230d400f99c443b489759d
app.get("/livros", (req, res) => {
    res.json(livros)
})

<<<<<<< HEAD
=======

>>>>>>> 3b2f5ac483a3d741c6230d400f99c443b489759d
app.get("/livros/total", (req, res) => {
    res.json({
        total: livros.length
    })
})

app.post("/livros", (req, res) => {
    res.status(201).json({
        mensagem: "Livro criado"
    })
})

<<<<<<< HEAD
module.exports = app
=======
module.exports = app
>>>>>>> 3b2f5ac483a3d741c6230d400f99c443b489759d
