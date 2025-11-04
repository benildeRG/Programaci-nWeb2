// Importamos el módulo HTTP que viene con Node.js
const http = require('http');

// Creamos el servidor
const server = http.createServer((req, res) => {
  // Configuramos la cabecera de la respuesta
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  // Enviamos un texto plano como respuesta
  res.end('Hola este es el servidor HTTP hecho con Node.js de Benilde');
});

// ejecutar puerto 3000
server.listen(3000, () => {
  console.log('Servidor HTTP  http://localhost:3000');
});


/*
const http = require('http');

const port = 3026;

const server = http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.end('Hola mundo');

});


server.listen(port,()=>{
    console.log(`Servidor: http://127.0.0.1:${port}`);
});
*/