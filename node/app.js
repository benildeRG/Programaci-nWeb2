const os = require('node:os');

console.log("Informacion de mi sistema");
console.log("---------------");
console.log("Nombre del sistema: ", os.platform());
console.log("Version de mis sistema: ", os.release());
console.log("Arquitectura ", os.cpus());