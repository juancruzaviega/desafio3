const Container = require('./main')
let products = new Container('products.txt')

const express = require('express')
let app = express()

const server = app.listen(8080, () => {
    console.log(`Servidor HTTP escuchando en el puerto ${server.address().port}`)
})

app.get('/productos', async (req, res) => {
    const allProducts = await products.getAll()
    res.send(allProducts)
})
app.get('/productoRandom', async (req, res) => {
    const product = await products.getRandom()
    res.send(product)
},)
app.get('/', (req, res) => {
    res.send('<h1 style="display:flex;justify-content:center;color:blue;text-align:center">Esta mal escrita la ruta </h1>')
})
server.on('error', error => {
    console.error(`Error en el servidor. ${error}`)
})