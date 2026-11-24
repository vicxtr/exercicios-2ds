<<<<<<< HEAD
function handler(req, res) {
    const porta = process.env.PORT === undefined
        ? 3000
        : Number(process.env.PORT)

=======

function handler(req, res) {
>>>>>>> 3b2f5ac483a3d741c6230d400f99c443b489759d
    if (req.url === "/") {
        res.statusCode = 200
        res.end("API no ar")
        return
    }

    if (req.url === "/status") {
<<<<<<< HEAD
        res.statusCode = 200
        res.setHeader("Content-Type", "application/json")

=======
        const porta = Number(process.env.PORT) || 3000

        res.statusCode = 200
        res.setHeader("Content-Type", "application/json")
>>>>>>> 3b2f5ac483a3d741c6230d400f99c443b489759d
        res.end(JSON.stringify({
            status: "online",
            porta: porta
        }))
<<<<<<< HEAD

=======
>>>>>>> 3b2f5ac483a3d741c6230d400f99c443b489759d
        return
    }

    res.statusCode = 404
    res.end("Rota nao encontrada")
}

<<<<<<< HEAD
module.exports = handler
=======
module.exports = handler
>>>>>>> 3b2f5ac483a3d741c6230d400f99c443b489759d
