const METHOD = {
    "PUT": "Alterar",
    "DELETE": "Remover",
    "POST": "Criação",
    "GET": "Buscar"
}


const print = async (req, res, next) => {
    console.log(`${new Date().toLocaleString("pt-BR")} - Card ${req.params.id} - ${req.card.titulo} <${METHOD[req.method]}>`)
    next()
}

module.exports = print