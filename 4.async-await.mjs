

import { readFile } from "node:fs/promises";

console.log("Leyendo el primer archivo...");
readFile("./archivo.txt", "utf-8")
  .then(text => {
    console.log("primer texto:", text);
  })

console.log('Hcer cosas mientras se lee el archivo...');

console.log("Leyendo el segundo archivo....");
readFile("./archivo2.txt", "utf-8")
  .then(text => {
    console.log("primer texto:", text);
  })

// mjs soporte para usar await en el cuerpo del archivo
