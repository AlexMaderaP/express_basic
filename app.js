// Usando objeto express
const express = require('express')
//App de Express
const app = express()
//Puerto en que vamos a ver nuestra app: localhost:3000
const port = 3000

//path inicial, respondera a la url localhost:3000
app.get('/',(req,res) => {
    res.send('Hello World!')
})

// Inicializando app
app.listen(port, () => {
    console.log(`Exmaple app listening on port ${port}`)
})

//Respondiendo texto
//localhost:3000/launchx
app.get('/launchx', (req,res) => {
    res.send('Bienvenidos a launchx')
})

//Regresando un objeto
//localhost:3000/explorersInNode
app.get('/explorersInNode', (req,res) =>{
    const expolorer = {name: 'Explorer', msg: 'Hello'}
    res.send(expolorer)
})

//Query Params: Recibir parametros por la url
//http://localhost:3000/explroers/carlo
app.get('/explorers/:explorerName', (req,res) => {
    res.send(req.params)
})