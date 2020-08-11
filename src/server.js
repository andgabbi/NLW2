//Servidor
const express = require ('express')
const server = express()

const {pageLanding, pageStudy, pageGiveClasses, saveClasses} = require('./pages')

//configurar o nunjuks (template engine)
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true
})

// inicio e configuração do servidor
//configurar arquivos estaticos (css,scripts, imagens)
//receber dados por req.body
server
.use(express.static("public"))
.use(express.urlencoded({ extended: true}))
//rotas da aplicação
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.post("/save-class", saveClasses)
//start do servidor
.listen(5500)





