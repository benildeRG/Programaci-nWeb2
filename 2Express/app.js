// Importamos el framework Express
const express = require('express');

// Creamos la aplicación Express
const app = express();

// Definimos una ruta principal que muestre un texto
app.get('/', (req, res) => {
  res.send('Hola este es el servidor creado con Express por Benilde');
});

// use puerto 4000
app.listen(4000, () => {
  console.log('Servidor Express  http://localhost:4000');
});

