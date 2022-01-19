const express = require('express');
const path = require('path');

const app = express();

app.listen(3000, ()=> console.log('exitoso'));


app.get('/contacto', (req, res)=> res.send('Dejanos tu contacto'))

app.get('/un-array', (req, res)=> res.send([1,2,3,4]))

app.get('/objeto', (req, res)=> res.send({name:'dario'}))

let saludo = "Bienvenido/a, ahora estamos en tu perfil"

app.get('/perfil', (req, res)=> res.send(saludo))

let producto = {tipoProducto: null, precio: null, cantidad: null}

app.get('/producto/agregar', (req, res)=> res.send(producto))

app.get('/', (req,res)=> {
    let htmlpath = path.resolve(__dirname, './views/index.html')
    res.sendFile(htmlpath)
})


app.get('/about-us', (req,res)=> {
    let htmlpath = path.join(__dirname, '/views/about-us.html')
    res.sendFile(htmlpath)
})