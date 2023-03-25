const express = require('express');
const hbs = require('hbs');
require('dotenv').config();
const app = express()
const port = process.env.PORT;

//Handlebars  require('hbs') 
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials', function (err) {});

// Servir contenido estático
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('home', {
        nombre: ' Sophia Muñoz',
        titulo: 'Node js'
    })
})  

app.get('/generic', (req, res) => {
    res.render('generic', {
        nombre: ' Sophia Muñoz',
        titulo: 'Node js'
    })
}) 

app.get('/elements', (req, res) => {
    res.render('elements', {
        nombre: ' Sophia Muñoz',
        titulo: 'Node js'
    })
}) 

app.get('/hola-mundo', (req, res) => {
    res.send('Hello from RESPECTIVE PATH -> hola-mundo')
})  

app.get('/generic', (req, res) => {
    res.sendFile(__dirname + '/public/generic.html')
})
  
app.get('/elements', (req, res) => {
    res.sendFile(__dirname + '/public/elements.html')
})

app.get('/*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html')
})

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`)
})