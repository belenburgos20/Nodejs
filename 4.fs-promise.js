//Esto solo en los módulos nativos
//que no tienen promesas nativas
//const fs = require("node:fs");
//const { promisify } = require("node:util");
//const readFilePromise = promisify(fs.readFile);

const fs = require("node:fs/promises");

console.log("Leyendo el primer archivo...");
fs.readFile("./archivo.txt", "utf-8")
  .then(text => {
    console.log("primer texto:", text);
  })

console.log('Hcer cosas mientras se lee el archivo...');

console.log("Leyendo el segundo archivo....");
fs.readFile("./archivo2.txt", "utf-8")
  .then(text => {
    console.log("primer texto:", text);
  })
