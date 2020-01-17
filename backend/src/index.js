const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes')

const app = express()
mongoose.connect('mongodb+srv://oministack10:thamires@cluster0-nizan.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

app.use(express.json())
app.use(routes)

app.listen(3333)

//get ,post, put, delete
// Query params: request.query (filtros, ordenação, paginação)
// Route params: request.params (indentificar recurso na alteração, remoção)
// Body: request.body (dados para criação ou alteração de resgistro)




