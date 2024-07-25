const express = require('express')
const cors = require('cors')
const app = express()
const ClienteRoutes = require('./routes/ClienteRoutes')

//Configuração de resposta do JSON
app.use(express.json())

app.use(cors({credentials: true, 
    origin: 'http://localhost:3000'}))

app.use(express.static('public'))

/* ROTAS */
app.use('/clientes',ClienteRoutes)

app.listen(5000)