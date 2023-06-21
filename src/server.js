const express = require('express')
const path = require('path')

const db = require('./database')
const routes = require('./routes')

const app = express()

//conexão com o banco de dados
db.connect()

//definindo o template engine
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))


//definindo os arquivos publicos
app.use(express.static(path.join(__dirname, '/public')))


//habilita server para receber dados via post (formulario)
app.use(express.urlencoded({ extended: true }))


//definindo as rotas
app.use('/', routes)


//erro 404
app.use((req,res)=>{
    res.send('pagina não encontrada')
})


const port = process.env.PORT || 8080
app.listen(port, ()=> console.log(`Server is listening on port ${port}`))